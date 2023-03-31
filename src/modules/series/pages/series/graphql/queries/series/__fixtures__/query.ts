import { MockedResponse } from "@apollo/client/testing";

import { SERIES } from "@app/modules/series/pages/series/graphql/queries/series";
import { SeriesQueryReturn } from "@app/modules/series/pages/series/graphql/queries/series/types";
import { QueryMock } from "@app/types/query-mock";

type SeriesQueryMock = QueryMock<SeriesQueryReturn>;

const buildSeriesQueryMock = ({ data, error }: SeriesQueryMock): MockedResponse<SeriesQueryReturn> => ({
    error,
    request: {
        query: SERIES,
    },
    result: {
        data,
    },
});

export { buildSeriesQueryMock };
