import { MockedResponse } from "@apollo/client/testing";

import { SETS } from "@app/modules/sets/pages/sets/graphql/queries/sets";
import { SetsQueryReturn } from "@app/modules/sets/pages/sets/graphql/queries/sets/types";
import { QueryMock } from "@app/types/QueryMock";

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
