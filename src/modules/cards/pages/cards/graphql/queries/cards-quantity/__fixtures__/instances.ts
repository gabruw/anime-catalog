import { cardsQuantityQueryErrorMock } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/__fixtures__/constants/error";
import { cardsQuantityQueryReturnSuccessMock } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/__fixtures__/constants/success";
import { buildCardsQuantityQueryMock } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/__fixtures__/query";

export const cardsQuantityQuerySuccessMock = buildCardsQuantityQueryMock({
    data: cardsQuantityQueryReturnSuccessMock,
});

export const cardsQuantityQueryFailureMock = buildCardsQuantityQueryMock({
    error: cardsQuantityQueryErrorMock,
});
