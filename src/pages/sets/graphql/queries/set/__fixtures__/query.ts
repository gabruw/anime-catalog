import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/types/query-mock";
import { SET } from "@app/pages/sets/graphql/queries/set";
import { SetQueryReturn, SetQueryVariables } from "@app/pages/sets/graphql/queries/set/types";

type SetQueryMock = QueryMock<SetQueryReturn, SetQueryVariables>;

const createSetQueryMock = ({
    data,
    error,
    variables,
}: SetQueryMock): MockedResponse<SetQueryReturn, SetQueryVariables> => ({
    error,
    request: {
        query: SET,
        variables,
    },
    result: {
        data,
    },
});

export { createSetQueryMock };
