import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/global/types/query-mock";
import { SERIES } from "@app/pages/series/graphql/queries/series";
import { SeriesQueryReturn } from "@app/pages/series/graphql/queries/series/types";

type SeriesQueryMock = QueryMock<SeriesQueryReturn>;

const buildSeriesQueryMock = ({ data, error }: SeriesQueryMock): MockedResponse<SeriesQueryReturn, void> => ({
    error,
    request: {
        query: SERIES,
    },
    result: {
        data,
    },
});

export { buildSeriesQueryMock };
