import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { cardsApolloClient } from "@app/modules/cards/pages/cards/graphql/client";

const Cards = (): ReactElement => (
    <ApolloProvider client={cardsApolloClient}>
        <div>Cards</div>
    </ApolloProvider>
);

export { Cards };
