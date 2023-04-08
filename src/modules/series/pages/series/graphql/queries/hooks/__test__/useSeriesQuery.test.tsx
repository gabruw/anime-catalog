import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import {
    SeriesQueryHookReturn,
    useSeriesQuery,
} from "@app/modules/series/pages/series/graphql/queries/hooks/useSeriesQuery";
import { seriesQueryReturnMock } from "@app/modules/series/pages/series/graphql/queries/series/__fixtures__/constants";
import {
    seriesQueryFailureMock,
    seriesQuerySuccessMock,
} from "@app/modules/series/pages/series/graphql/queries/series/__fixtures__/instances";

describe("useSeriesQuery()", () => {
    it("should return series successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<void, SeriesQueryHookReturn>({
            hook: useSeriesQuery,
            mocks: [seriesQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.series).toStrictEqual(seriesQueryReturnMock.series);
    });

    it("shouldn't return series and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<void, SeriesQueryHookReturn>({
            hook: useSeriesQuery,
            mocks: [seriesQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.series).toBeUndefined();
    });
});
