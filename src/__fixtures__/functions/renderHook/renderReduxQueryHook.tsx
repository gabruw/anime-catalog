/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@app/storages/system";

type RenderReduxQueryHook<TResult, TProps> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
    mocks: MockedProviderProps["mocks"];
};

const renderReduxQueryHook = <TProps, TResult>({
    hook,
    mocks,
    props,
}: RenderReduxQueryHook<TResult, TProps>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: any) => (
            <MockedProvider addTypename={false} mocks={mocks}>
                <ReduxProvider store={store}>{children}</ReduxProvider>
            </MockedProvider>
        ),
    });
};

export { renderReduxQueryHook };
