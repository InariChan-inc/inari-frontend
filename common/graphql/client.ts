import { 
  ApolloClient, 
  InMemoryCache,
  HttpLink
} from '@apollo/client';
import { refreshToken as refreshTokenCall } from './tokenClient';
import { setContext } from '@apollo/client/link/context';

import store from '../../redux';
import {
  setAll,
  deleteAll
} from '../../redux/actions/token';

import {
  REFRESH_TOKEN_EXP_ITEM,
  REFRESH_TOKEN_ITEM
} from '../localStorageItems';

import { useRouter } from 'next/router';

const httpLink = new HttpLink({
  uri: process.env.URI,
  credentials: 'same-origin',
})
  
const authLink = setContext(async (_, { headers }) => {
  // router for redirecting if request is failing
  const router = useRouter();

  // get the authentication token from redux
  let {
    token: {
      token,
      tokenExp,
      refreshToken,
      refreshTokenExp
    }
  } = store.getState();

  // if token is expired
  if (tokenExp <= Date.now() + 5000) {
    // and refresh token is also expired
    if (refreshTokenExp <= Date.now() + 5000) {
      try {
        // send request for refreshing tokens data
        const {
          data: {
            token: recievedToken,
            tokenExp: recivedTokenExp,
            refreshToken: recievedRefreshToken,
            refreshTokenExp: recievedRefreshTokenExp
          }
        } = await refreshTokenCall(refreshToken);
        
        // change actual token to new one
        token = recievedToken;

        // and save recieved data in redux
        store.dispatch(setAll({
          token: recievedToken,
          tokenExp: recivedTokenExp,
          refreshToken: recievedRefreshToken,
          refreshTokenExp: recievedRefreshTokenExp
        }));

      } catch(e) {
        console.error(e);
      }
    } else {
        //otherwise, delete all data about tokens
        store.dispatch(deleteAll())
        localStorage.setItem(REFRESH_TOKEN_ITEM, '');
        localStorage.setItem(REFRESH_TOKEN_EXP_ITEM, '');
        //and redirect to sign in page
        router.push('/signin');
    }
  }

  // return the headers to the context so httpLink can read them
  return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      }
  }
});
  
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


export default client;
