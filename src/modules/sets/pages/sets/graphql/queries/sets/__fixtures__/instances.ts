import {
    setsQueryErrorMock,
    setsQueryReturnMock,
} from "@app/modules/sets/pages/sets/graphql/queries/sets/__fixtures__/constants";
import { buildSetsQueryMock } from "@app/modules/sets/pages/sets/graphql/queries/sets/__fixtures__/query";

export const setsQuerySuccessMock = buildSetsQueryMock({
    data: setsQueryReturnMock,
});

export const setsQueryFailureMock = buildSetsQueryMock({
    error: setsQueryErrorMock,
});
