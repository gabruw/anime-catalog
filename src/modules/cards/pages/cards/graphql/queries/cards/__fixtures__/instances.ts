import { cardsQueryErrorMock } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/error";
import {
    cardsQueryReturnFilterMock,
    cardsQueryVariablesFilterMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/filter";
import {
    cardsQueryReturnLastPaginationMock,
    cardsQueryReturnPaginationMock,
    cardsQueryVariablesLastPaginationMock,
    cardsQueryVariablesPaginationMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/pagination";
import { buildCardsQueryMock } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/query";

export const cardsQuerySuccessFilterMock = buildCardsQueryMock({
    data: cardsQueryReturnFilterMock,
    variables: cardsQueryVariablesFilterMock,
});

export const cardsQuerySuccessPaginationMock = buildCardsQueryMock({
    data: cardsQueryReturnPaginationMock,
    variables: cardsQueryVariablesPaginationMock,
});

export const cardsQuerySuccessLastPaginationMock = buildCardsQueryMock({
    data: cardsQueryReturnLastPaginationMock,
    variables: cardsQueryVariablesLastPaginationMock,
});

export const cardsQueryFailureMock = buildCardsQueryMock({
    error: cardsQueryErrorMock,
});
