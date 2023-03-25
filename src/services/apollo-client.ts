import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.API_BASE,
    connectToDevTools: !import.meta.env.PROD,
});

export { apolloClient };
