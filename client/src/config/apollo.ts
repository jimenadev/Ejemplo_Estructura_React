import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const marketplacePlatformURL = 'http://localhost:4004'

const link = createHttpLink({
  uri: marketplacePlatformURL,
});

export default new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link,
});