import { MockedResponse } from "@apollo/client/testing";

import { SERIE } from "@app/modules/series/pages/serie/graphql/queries/serie";
import { SerieQueryReturn, SerieQueryVariables } from "@app/modules/series/pages/serie/graphql/queries/serie/types";
import { QueryMock } from "@app/types/QueryMock";

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
