import { ApolloClient, InMemoryCache } from "@apollo/client";

import { link } from "@app/graphql/link";

const seriesApolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: !import.meta.env.PROD,
});

export { seriesApolloClient };
