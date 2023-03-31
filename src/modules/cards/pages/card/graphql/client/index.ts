import { ApolloClient, InMemoryCache } from "@apollo/client";

const cardApolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_API_BASE,
    connectToDevTools: !import.meta.env.PROD,
});

export { cardApolloClient };
