import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import {
    SetQueryHookProps,
    SetQueryHookReturn,
    useSetQuery,
} from "@app/modules/sets/pages/set/graphql/queries/hooks/useSetQuery";
import {
    setQueryReturnMock,
    setQueryVariablesMock,
} from "@app/modules/sets/pages/set/graphql/queries/set/__fixtures__/constants";
import {
    setQueryFailureMock,
    setQuerySuccessMock,
} from "@app/modules/sets/pages/set/graphql/queries/set/__fixtures__/instances";

const props: SetQueryHookProps = {
    setId: setQueryVariablesMock.id,
};

describe("useSetQuery()", () => {
    it("should return set successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetQueryHookProps, SetQueryHookReturn>({
            props,
            hook: useSetQuery,
            mocks: [setQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.set).toStrictEqual(setQueryReturnMock.set);
    });

    it("shouldn't return set and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<SetQueryHookProps, SetQueryHookReturn>({
            props,
            hook: useSetQuery,
            mocks: [setQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.set).toBeUndefined();
    });
});
