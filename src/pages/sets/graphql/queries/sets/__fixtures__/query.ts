import { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";

import { SETS } from "@app/pages/sets/graphql/queries/sets";
import { SetsQueryReturn } from "@app/pages/sets/graphql/queries/sets/types";

type MockSetsQuery = {
    error?: GraphQLError;
    data?: SetsQueryReturn;
};

const mockSetsQuery = ({ data, error }: MockSetsQuery): MockedResponse => ({
    error,
    request: {
        query: SETS,
    },
    result: {
        data,
    },
});

export { mockSetsQuery };
