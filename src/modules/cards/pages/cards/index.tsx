import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { List } from "@app/modules/cards/pages/cards/components/List";
import { cardsApolloClient } from "@app/modules/cards/pages/cards/graphql/client";

const Cards = (): ReactElement => (
    <ApolloProvider client={cardsApolloClient}>
        <div>Cards</div>
        <List />
    </ApolloProvider>
);

export { Cards };
