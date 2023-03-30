import { renderQueryHook } from "@app/__fixtures__/functions/renderQueryHook";
import {
    SerieQueryHookParams,
    SerieQueryHookReturn,
    useSerieQuery,
} from "@app/pages/series/graphql/queries/hooks/useSerieQuery";
import {
    serieQueryReturnMock,
    serieQueryVariablesMock,
} from "@app/pages/series/graphql/queries/serie/__fixtures__/constants";
import {
    serieQueryFailureMock,
    serieQuerySuccessMock,
} from "@app/pages/series/graphql/queries/serie/__fixtures__/instances";

const props: SerieQueryHookParams = {
    serieId: serieQueryVariablesMock.id,
};

describe("useSerieQuery()", () => {
    it("should return serie successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SerieQueryHookReturn, SerieQueryHookParams>({
            props,
            hook: useSerieQuery,
            mocks: [serieQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.serie).toStrictEqual(serieQueryReturnMock.serie);
    });

    it("should not return serie and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SerieQueryHookReturn, SerieQueryHookParams>({
            props,
            hook: useSerieQuery,
            mocks: [serieQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.serie).toBeUndefined();
    });
});
