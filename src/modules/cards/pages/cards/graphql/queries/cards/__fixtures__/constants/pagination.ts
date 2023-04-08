import { DEFAULT_COUNT, DEFAULT_PAGINATION } from "@app/hooks/usePagination";
import { cards } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/cards.json";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";

export const cardsQueryVariablesPaginationMock: CardsQueryVariables = {
    pagination: {
        count: DEFAULT_COUNT,
        page: DEFAULT_PAGINATION,
    },
};

export const cardsQueryVariablesLastPaginationMock: CardsQueryVariables = {
    pagination: {
        count: DEFAULT_COUNT * 2,
        page: DEFAULT_PAGINATION * 2,
    },
};

export const cardsQueryReturnPaginationMock: CardsQueryReturn = {
    cards: cards.splice(DEFAULT_COUNT),
};

export const cardsQueryReturnLastPaginationMock: CardsQueryReturn = {
    cards: cards.splice(DEFAULT_COUNT * 2),
};
