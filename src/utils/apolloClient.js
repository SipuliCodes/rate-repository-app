import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://86.50.104.236:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;