import { ApolloClient, InMemoryCache } from "@apollo/client";

const cardsApolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_API_BASE,
    connectToDevTools: !import.meta.env.PROD,
});

export { cardsApolloClient };
