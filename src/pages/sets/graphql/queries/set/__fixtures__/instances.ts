import {
    setQueryErrorMock,
    setQueryReturnMock,
    setQueryVariablesMock,
} from "@app/pages/sets/graphql/queries/set/__fixtures__/constants";
import { createSetQueryMock } from "@app/pages/sets/graphql/queries/set/__fixtures__/query";

export const mockSetQuerySuccess = createSetQueryMock({
    data: setQueryReturnMock,
    variables: setQueryVariablesMock,
});

export const mockSetQueryFailure = createSetQueryMock({
    error: setQueryErrorMock,
    variables: setQueryVariablesMock,
});
