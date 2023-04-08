import { cards } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/cards.json";
import { cardsQueryVariablesPaginationMock } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/pagination";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";

export const filteredCard = cards.splice(1);

export const cardsQueryVariablesFilterMock: CardsQueryVariables = {
    pagination: cardsQueryVariablesPaginationMock.pagination,
    filters: {
        name: cards[0].name,
    },
};

export const cardsQueryReturnFilterMock: CardsQueryReturn = {
    cards: filteredCard,
};
