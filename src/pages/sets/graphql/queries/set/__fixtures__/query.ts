import { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";

import { SET } from "@app/pages/sets/graphql/queries/set";
import { SetQueryReturn } from "@app/pages/sets/graphql/queries/set/types";

type MockSetQuery = {
    error?: GraphQLError;
    data?: SetQueryReturn;
};

const mockSetQuery = ({ data, error }: MockSetQuery): MockedResponse => ({
    error,
    request: {
        query: SET,
    },
    result: {
        data,
    },
});

export { mockSetQuery };
