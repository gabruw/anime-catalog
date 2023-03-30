import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { setsApolloClient } from "@app/pages/sets/graphql/client";

const Sets = (): ReactElement => (
    <ApolloProvider client={setsApolloClient}>
        <div>Sets</div>
    </ApolloProvider>
);

export { Sets };
