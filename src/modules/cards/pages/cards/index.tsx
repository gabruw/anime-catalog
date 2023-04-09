import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

import { PokemonCardList } from "@app/modules/cards/pages/cards/components/PokemonCardList";
import { cardsApolloClient } from "@app/modules/cards/pages/cards/graphql/client";
import { PaginationContextProvider } from "@app/storages/pagination";

const Cards = (): ReactElement => (
    <ApolloProvider client={cardsApolloClient}>
        <PaginationContextProvider>
            <PokemonCardList />
        </PaginationContextProvider>
    </ApolloProvider>
);

export { Cards };
