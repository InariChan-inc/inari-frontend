import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import store from '@r';

// @ts-ignore
const { token: { token } } = store.getState();

const download = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: process.env.URI,
    credentials: 'same-origin',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
});

export default download;