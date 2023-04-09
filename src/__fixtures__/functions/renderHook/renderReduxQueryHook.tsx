import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { Provider as ReduxProvider } from "react-redux";

import { RenderHookWrapper } from "@app/__fixtures__/types/RenderHookWrapper";
import { store } from "@app/storages/system";

type RenderReduxQueryHook<TProps, TResult> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
    mocks: MockedProviderProps["mocks"];
};

const renderReduxQueryHook = <TProps, TResult>({
    hook,
    mocks,
    props,
}: RenderReduxQueryHook<TProps, TResult>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: RenderHookWrapper) => (
            <MockedProvider addTypename={false} mocks={mocks}>
                <ReduxProvider store={store}>{children}</ReduxProvider>
            </MockedProvider>
        ),
    });
};

export { renderReduxQueryHook };
