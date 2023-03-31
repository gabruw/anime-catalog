import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { setsApolloClient } from "@app/modules/sets/pages/sets/graphql/client";

const Set = (): ReactElement => (
    <ApolloProvider client={setsApolloClient}>
        <div>Set</div>
    </ApolloProvider>
);

export { Set };
