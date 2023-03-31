import { MockedResponse } from "@apollo/client/testing";

import { SET } from "@app/modules/sets/pages/set/graphql/queries/set";
import { SetQueryReturn, SetQueryVariables } from "@app/modules/sets/pages/set/graphql/queries/set/types";
import { QueryMock } from "@app/types/query-mock";

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
