
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const createApolloClient = (authToken: String) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_APOLLO_SERVER_URL,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
};