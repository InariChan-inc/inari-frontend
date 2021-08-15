import 'tailwindcss/tailwind.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'animate.css';
import Head from 'next/head';
import { useEffect } from 'react';

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/core';

import {
  ApolloProvider,
  gql,
} from "@apollo/client";
import {
  Provider as ReduxProvider
} from 'react-redux';

import { GlobalLayout } from '../layouts';
import client from '../common/graphql/client';
import store from '../redux';
import {
  setUser
} from '../redux/actions/user';

import { IProfile } from '../common/graphql/interfaces';

SwiperCore.use([Navigation, Pagination, Autoplay]);


function App({ Component, pageProps }) {

  useEffect(() => {

    const {
      token
    } = store.getState().token;

    if (token) {
      client.query<IProfile>({
        query: gql`
          {
            profile {
              name
              aboutMe
              email
              theme
              avatar {
                name
                type
                path
                pathResized
                isTmp
              }
              roleData {
                name
                key
                permissions
              }
            }
          }
        `
      }).then(({ data: { profile } }) => {
        store.dispatch(setUser(profile));
      }).catch(error => console.error(error))
    } else {
      const now = Date.now();
      console.log('Ne fartanulo :(')
      console.log('token', token);
      console.log('tokenExp', tokenExp);
      console.log('now', now);
      console.log(tokenExp < now);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        {/* Default settings: icon, fonts, etc. */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
        </Head>

        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
