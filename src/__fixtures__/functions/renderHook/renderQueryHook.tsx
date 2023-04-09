import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";

import { RenderHookWrapper } from "@app/__fixtures__/types/RenderHookWrapper";

type RenderQueryHook<TProps, TResult> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
    mocks: MockedProviderProps["mocks"];
};

const renderQueryHook = <TProps, TResult>({
    hook,
    mocks,
    props,
}: RenderQueryHook<TProps, TResult>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: RenderHookWrapper) => (
            <MockedProvider addTypename={false} mocks={mocks}>
                {children}
            </MockedProvider>
        ),
    });
};

export { renderQueryHook };
