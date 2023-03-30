import {
    cardsQueryErrorMock,
    cardsQueryReturnMock,
} from "@app/pages/cards/graphql/queries/cards/__fixtures__/constants";
import { buildCardsQueryMock } from "@app/pages/cards/graphql/queries/cards/__fixtures__/query";

export const cardsQuerySuccessMock = buildCardsQueryMock({
    data: cardsQueryReturnMock,
});

export const cardsQueryFailureMock = buildCardsQueryMock({
    error: cardsQueryErrorMock,
});
