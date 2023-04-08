import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@app/storages/system";

type RenderRedux = {
    component: ReactElement;
};

const renderRedux = ({ component }: RenderRedux): void => {
    render(<ReduxProvider store={store}>{component}</ReduxProvider>);
};

export { renderRedux };
