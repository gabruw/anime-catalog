import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { serieApolloClient } from "@app/modules/series/pages/serie/graphql/client";

const Serie = (): ReactElement => (
    <ApolloProvider client={serieApolloClient}>
        <div>Serie</div>
    </ApolloProvider>
);

export { Serie };
