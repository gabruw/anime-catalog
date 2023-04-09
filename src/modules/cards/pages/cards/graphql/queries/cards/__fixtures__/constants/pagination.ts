import { cards } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/cards.json";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";
import { DEFAULT_COUNT, DEFAULT_PAGE } from "@app/storages/pagination/constants";

export const cardsQueryVariablesPaginationMock: CardsQueryVariables = {
    pagination: {
        page: DEFAULT_PAGE,
        count: DEFAULT_COUNT,
    },
};

export const cardsQueryVariablesLastPaginationMock: CardsQueryVariables = {
    pagination: {
        page: DEFAULT_PAGE * 2,
        count: DEFAULT_COUNT * 2,
    },
};

export const cardsQueryReturnPaginationMock: CardsQueryReturn = {
    cards: cards.splice(DEFAULT_COUNT),
};

export const cardsQueryReturnLastPaginationMock: CardsQueryReturn = {
    cards: cards.splice(DEFAULT_COUNT * 2),
};
