import { mockSetQueryError, mockSetQueryReturn } from "@app/pages/sets/graphql/queries/set/__fixtures__/constants";
import { mockSetQuery } from "@app/pages/sets/graphql/queries/set/__fixtures__/query";

export const mockSetQuerySuccess = mockSetQuery({
    data: mockSetQueryReturn,
});

export const mockSetQueryFailure = mockSetQuery({
    error: mockSetQueryError,
});
