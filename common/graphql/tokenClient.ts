import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { IRefreshToken } from './interfaces';

const tokenClient = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache()
});

export const refreshToken = (tokenRefresh: string) => {
  return tokenClient.mutate<IRefreshToken>({
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