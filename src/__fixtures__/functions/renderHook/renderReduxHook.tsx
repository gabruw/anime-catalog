import { Renderer, renderHook, RenderHookResult } from "@testing-library/react-hooks";
import { Provider as ReduxProvider } from "react-redux";

import { RenderHookWrapper } from "@app/__fixtures__/types/RenderHookWrapper";
import { store } from "@app/storages/system";

type RenderReduxHook<TProps, TResult> = {
    props?: TProps;
    hook: (props: TProps) => TResult;
};

const renderReduxHook = <TProps, TResult>({
    hook,
    props,
}: RenderReduxHook<TProps, TResult>): RenderHookResult<TProps, TResult, Renderer<TProps>> => {
    return renderHook<TProps, TResult>(hook, {
        initialProps: props,
        wrapper: ({ children }: RenderHookWrapper) => <ReduxProvider store={store}>{children}</ReduxProvider>,
    });
};

export { renderReduxHook };
