import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { PokemonCardList } from "@app/modules/cards/pages/cards/components/PokemonCardList";
import { cardsApolloClient } from "@app/modules/cards/pages/cards/graphql/client";

const Cards = (): ReactElement => (
    <ApolloProvider client={cardsApolloClient}>
        <PokemonCardList />
    </ApolloProvider>
);

export { Cards };
