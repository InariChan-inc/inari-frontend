import 'normalize.css';
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

import { ApolloProvider } from "@apollo/client";

import { BaseCSS } from 'styled-bootstrap-grid';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import theme from '@theme';

import {
  Provider as ReduxProvider
} from 'react-redux';

import { GlobalLayout } from '@layouts';
import guest from '@common/graphql/guest';
import store from '@r';
import updateProfile from '@common/updateProfile';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MuiTheme = createTheme({});

function App({ Component, pageProps }) {

  useEffect(() => {

    const {
      token
    //@ts-ignore
    } = store.getState().token;

    if (token) {
      updateProfile();
    }
  }, []);

  return (
    <ApolloProvider client={guest}>
      <ReduxProvider store={store}>        
        {/* Default settings: icon, fonts, etc. */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" /> 
        </Head>

        <MuiThemeProvider theme={MuiTheme}>
          <ThemeProvider theme={theme}>
            <GlobalLayout>
              <BaseCSS />
              <Component {...pageProps} />
            </GlobalLayout>
          </ThemeProvider>
        </MuiThemeProvider>
    </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
