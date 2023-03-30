import {
    cardQueryErrorMock,
    cardQueryReturnMock,
    cardQueryVariablesMock,
} from "@app/pages/cards/graphql/queries/card/__fixtures__/constants";
import { createCardQueryMock } from "@app/pages/cards/graphql/queries/card/__fixtures__/query";

export const mockSetQuerySuccess = createCardQueryMock({
    data: cardQueryReturnMock,
    variables: cardQueryVariablesMock,
});

export const mockSetQueryFailure = createCardQueryMock({
    error: cardQueryErrorMock,
    variables: cardQueryVariablesMock,
});
