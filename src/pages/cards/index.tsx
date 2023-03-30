import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { cardsApolloClient } from "@app/pages/cards/graphql/client";

const Cards = (): ReactElement => (
    <ApolloProvider client={cardsApolloClient}>
        <div>Cards</div>
    </ApolloProvider>
);

export { Cards };
