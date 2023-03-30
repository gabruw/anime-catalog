import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/types/query-mock";
import { SETS } from "@app/pages/sets/graphql/queries/sets";
import { SetsQueryReturn } from "@app/pages/sets/graphql/queries/sets/types";

type SetsQueryMock = QueryMock<SetsQueryReturn>;

const buildSetsQueryMock = ({ data, error }: SetsQueryMock): MockedResponse<SetsQueryReturn> => ({
    error,
    request: {
        query: SETS,
    },
    result: {
        data,
    },
});

export { buildSetsQueryMock };
