/* eslint-disable @typescript-eslint/no-explicit-any */
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";

type RenderQueryHook<TResult, TProps> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
    mocks: MockedProviderProps["mocks"];
};

export const renderQueryHook = <TResult, TProps = void>({
    hook,
    mocks,
    props,
}: RenderQueryHook<TResult, TProps>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: any) => (
            <MockedProvider addTypename={false} mocks={mocks}>
                {children}
            </MockedProvider>
        ),
    });
};
