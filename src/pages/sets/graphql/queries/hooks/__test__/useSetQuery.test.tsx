import { renderQueryHook } from "@app/__fixtures__/functions/renderQueryHook";
import { SetQueryHookParams, SetQueryHookReturn, useSetQuery } from "@app/pages/sets/graphql/queries/hooks/useSetQuery";
import { setQueryReturnMock, setQueryVariablesMock } from "@app/pages/sets/graphql/queries/set/__fixtures__/constants";
import { setQueryFailureMock, setQuerySuccessMock } from "@app/pages/sets/graphql/queries/set/__fixtures__/instances";

const props: SetQueryHookParams = {
    setId: setQueryVariablesMock.id,
};

describe("useSetQuery()", () => {
    it("should return set successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetQueryHookReturn, SetQueryHookParams>({
            props,
            hook: useSetQuery,
            mocks: [setQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.set).toStrictEqual(setQueryReturnMock.set);
    });

    it("should not return set and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetQueryHookReturn, SetQueryHookParams>({
            props,
            hook: useSetQuery,
            mocks: [setQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.set).toBeUndefined();
    });
});
