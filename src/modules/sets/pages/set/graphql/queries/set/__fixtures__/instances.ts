import {
    setQueryErrorMock,
    setQueryReturnMock,
    setQueryVariablesMock,
} from "@app/modules/sets/pages/set/graphql/queries/set/__fixtures__/constants";
import { createSetQueryMock } from "@app/modules/sets/pages/set/graphql/queries/set/__fixtures__/query";

export const setQuerySuccessMock = createSetQueryMock({
    data: setQueryReturnMock,
    variables: setQueryVariablesMock,
});

export const setQueryFailureMock = createSetQueryMock({
    error: setQueryErrorMock,
    variables: setQueryVariablesMock,
});
