import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@app/storages/system";

type RenderReduxApollo = {
    component: ReactElement;
    mocks: MockedResponse[];
};

const renderReduxApollo = ({ component, mocks }: RenderReduxApollo): void => {
    render(
        <MockedProvider addTypename={false} mocks={mocks}>
            <ReduxProvider store={store}>{component}</ReduxProvider>
        </MockedProvider>
    );
};

export { renderReduxApollo };
