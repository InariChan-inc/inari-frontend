import { 
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';


const guest = new ApolloClient({
    uri: process.env.URI,
    cache: new InMemoryCache(),
});


export default guest;
