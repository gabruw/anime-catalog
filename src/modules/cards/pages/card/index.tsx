import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { cardApolloClient } from "@app/modules/cards/pages/card/graphql/client";

const Card = (): ReactElement => (
    <ApolloProvider client={cardApolloClient}>
        <div>Card</div>
    </ApolloProvider>
);

export { Card };
