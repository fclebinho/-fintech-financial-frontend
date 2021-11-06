
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const createApolloClient = (authToken: String) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://staging-financial-api.herokuapp.com/graphql',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
};