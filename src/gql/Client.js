import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws'

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_HOST,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SERVER_WS_HOST,
  options: {
    reconnect: true,
    connectionParams: {
      authorization: localStorage.getItem('token') ? `${localStorage.getItem('token')}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client