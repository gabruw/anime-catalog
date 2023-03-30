import { mockSetsQueryError, mockSetsQueryReturn } from "@app/pages/sets/graphql/queries/sets/__fixtures__/constants";
import { mockSetsQuery } from "@app/pages/sets/graphql/queries/sets/__fixtures__/query";

export const mockSetsQuerySuccess = mockSetsQuery({
    data: mockSetsQueryReturn,
});

export const mockSetsQueryFailure = mockSetsQuery({
    error: mockSetsQueryError,
});
