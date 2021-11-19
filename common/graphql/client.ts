import { 
  ApolloClient, 
  InMemoryCache,
  HttpLink
} from '@apollo/client';
import { refreshToken as refreshTokenCall } from './tokenClient';
import { setContext } from '@apollo/client/link/context';

import {
  setAll,
  deleteAll
} from '@r/actions/token';

import {
  TOKEN_ITEM,
  TOKEN_EXP_ITEM,
  REFRESH_TOKEN_EXP_ITEM,
  REFRESH_TOKEN_ITEM,
} from '../localStorageItems';

import store from '@r';

const httpLink = new HttpLink({
  uri: process.env.URI,
  credentials: 'same-origin',
})
  
const authLink = setContext(async (_, { headers }) => {
  // router for redirecting if request is failing

  // get the authentication token from redux
  let {
    token: {
      token,
      tokenExp,
      refreshToken,
      refreshTokenExp
    }
  // @ts-ignore
  } = store.getState();

  // if token is expired
  if (token !== '') {
    if (tokenExp <= Date.now()) {
      console.log('token is expired')
      // and refresh token is alive
      if (refreshTokenExp > Date.now()) {
        console.log('refresh token is alive');
        try {
          // send request for refreshing tokens data
          const {
            data: {
              refreshToken: {
                token: recievedToken,
                tokenExp: recivedTokenExp,
                refreshToken: recievedRefreshToken,
                refreshTokenExp: recievedRefreshTokenExp
              }
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

          localStorage?.setItem(TOKEN_ITEM, recievedToken);
          localStorage?.setItem(TOKEN_EXP_ITEM, String(recivedTokenExp));
          localStorage?.setItem(REFRESH_TOKEN_ITEM, recievedRefreshToken);
          localStorage?.setItem(REFRESH_TOKEN_EXP_ITEM, String(recievedRefreshTokenExp));

        } catch(e) {
          console.error(e);
        }
      } else {
          console.log('DELETE')
          //otherwise, delete all data about tokens
          store.dispatch(deleteAll())
          localStorage.setItem(REFRESH_TOKEN_ITEM, '');
          localStorage.setItem(REFRESH_TOKEN_EXP_ITEM, '');
          //and redirect to sign in page
          console.log('IMHERE')
         
      }
    }
  }

  // return the headers to the context so httpLink can read them
  return {
      headers: {
        ...headers,
        authorization: token !== '' ? `Bearer ${token}` : '',
      }
  }
});
  
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      resultCaching: false
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache'
      },
      mutate: {
        fetchPolicy: 'no-cache'
      }
    }
});


export default client;
