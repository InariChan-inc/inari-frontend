import {
  ApolloClient,
  InMemoryCache,
  gql,
  FetchResult,
} from '@apollo/client';
import { GeneralToken } from './interfaces';

const tokenClient = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache()
});

export const refreshToken = (tokenRefresh: string) => {
  return tokenClient.mutate<GeneralToken>({
    mutation: gql`
      mutation {
        refreshToken(tokenRefresh: "${tokenRefresh}") {
          token,
          tokenExp,
          refreshToken,
          refreshTokenExp
        }
      }
    `
  })
}

export default tokenClient;