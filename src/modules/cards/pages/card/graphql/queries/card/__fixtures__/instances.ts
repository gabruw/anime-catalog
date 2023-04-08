import {
    cardQueryErrorMock,
    cardQueryReturnMock,
    cardQueryVariablesMock,
} from "@app/modules/cards/pages/card/graphql/queries/card/__fixtures__/constants";
import { createCardQueryMock } from "@app/modules/cards/pages/card/graphql/queries/card/__fixtures__/query";

export const cardQuerySuccessMock = createCardQueryMock({
    data: cardQueryReturnMock,
    variables: cardQueryVariablesMock,
});

export const cardQueryFailureMock = createCardQueryMock({
    error: cardQueryErrorMock,
    variables: cardQueryVariablesMock,
});
