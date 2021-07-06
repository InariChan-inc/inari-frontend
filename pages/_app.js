import 'tailwindcss/tailwind.css';

import Head from 'next/head';

import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from 'react-redux';

import client from '../common/graphql/client';
import store from '../redux';

function MyApp({ Component, pageProps }) {
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
        {/* Component to be rendered */}
        <Component {...pageProps} />
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default MyApp
