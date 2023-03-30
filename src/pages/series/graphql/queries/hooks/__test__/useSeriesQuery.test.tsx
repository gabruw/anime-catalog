import { renderQueryHook } from "@app/__fixtures__/functions/renderQueryHook";
import { SeriesQueryHookReturn, useSeriesQuery } from "@app/pages/series/graphql/queries/hooks/useSeriesQuery";
import { seriesQueryReturnMock } from "@app/pages/series/graphql/queries/series/__fixtures__/constants";
import {
    setsQueryFailureMock,
    setsQuerySuccessMock,
} from "@app/pages/sets/graphql/queries/sets/__fixtures__/instances";

describe("useSeriesQuery()", () => {
    it("should return series successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SeriesQueryHookReturn>({
            hook: useSeriesQuery,
            mocks: [setsQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.series).toStrictEqual(seriesQueryReturnMock.series);
    });

    it("should not return series and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SeriesQueryHookReturn>({
            hook: useSeriesQuery,
            mocks: [setsQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.series).toBeUndefined();
    });
});
