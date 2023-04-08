/* eslint-disable @typescript-eslint/no-explicit-any */
import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@app/storages/system";

type RenderReduxHook<TResult, TProps> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
};

const renderReduxHook = <TProps, TResult>({
    hook,
    props,
}: RenderReduxHook<TResult, TProps>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: any) => <ReduxProvider store={store}>{children}</ReduxProvider>,
    });
};

export { renderReduxHook };
