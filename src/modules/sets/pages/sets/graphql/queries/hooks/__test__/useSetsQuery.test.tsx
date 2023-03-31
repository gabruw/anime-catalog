import { renderQueryHook } from "@app/__fixtures__/functions/renderQueryHook";
import { SetsQueryHookReturn, useSetsQuery } from "@app/modules/sets/pages/sets/graphql/queries/hooks/useSetsQuery";
import { setsQueryReturnMock } from "@app/modules/sets/pages/sets/graphql/queries/sets/__fixtures__/constants";
import {
    setsQueryFailureMock,
    setsQuerySuccessMock,
} from "@app/modules/sets/pages/sets/graphql/queries/sets/__fixtures__/instances";

describe("useSetsQuery()", () => {
    it("should return sets successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetsQueryHookReturn>({
            hook: useSetsQuery,
            mocks: [setsQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.sets).toStrictEqual(setsQueryReturnMock.sets);
    });

    it("should not return sets and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetsQueryHookReturn>({
            hook: useSetsQuery,
            mocks: [setsQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.sets).toBeUndefined();
    });
});
