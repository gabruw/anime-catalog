import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import {
    SerieQueryHookProps,
    SerieQueryHookReturn,
    useSerieQuery,
} from "@app/modules/series/pages/serie/graphql/queries/hooks/useSerieQuery";
import {
    serieQueryReturnMock,
    serieQueryVariablesMock,
} from "@app/modules/series/pages/serie/graphql/queries/serie/__fixtures__/constants";
import {
    serieQueryFailureMock,
    serieQuerySuccessMock,
} from "@app/modules/series/pages/serie/graphql/queries/serie/__fixtures__/instances";

const props: SerieQueryHookProps = {
    serieId: serieQueryVariablesMock.id,
};

describe("useSerieQuery()", () => {
    it("should return serie successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SerieQueryHookProps, SerieQueryHookReturn>({
            props,
            hook: useSerieQuery,
            mocks: [serieQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.serie).toStrictEqual(serieQueryReturnMock.serie);
    });

    it("shouldn't return serie and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SerieQueryHookProps, SerieQueryHookReturn>({
            props,
            hook: useSerieQuery,
            mocks: [serieQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.serie).toBeUndefined();
    });
});
