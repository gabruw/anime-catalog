import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/global/types/query-mock";
import { SERIE } from "@app/pages/series/graphql/queries/serie";
import { SerieQueryReturn, SerieQueryVariables } from "@app/pages/series/graphql/queries/serie/types";

type SerieQueryMock = QueryMock<SerieQueryReturn, SerieQueryVariables>;

const createSerieQueryMock = ({
    data,
    error,
    variables,
}: SerieQueryMock): MockedResponse<SerieQueryReturn, SerieQueryVariables> => ({
    error,
    request: {
        query: SERIE,
        variables,
    },
    result: {
        data,
    },
});

export { createSerieQueryMock };
