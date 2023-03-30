import {
    seriesQueryErrorMock,
    seriesQueryReturnMock,
} from "@app/pages/series/graphql/queries/series/__fixtures__/constants";
import { buildSeriesQueryMock } from "@app/pages/series/graphql/queries/series/__fixtures__/query";

export const seriesQuerySuccessMock = buildSeriesQueryMock({
    data: seriesQueryReturnMock,
});

export const seriesQueryFailureMock = buildSeriesQueryMock({
    error: seriesQueryErrorMock,
});
