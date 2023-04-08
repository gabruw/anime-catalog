import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

type RenderApollo = {
    component: ReactElement;
    mocks: MockedResponse[];
};

const renderApollo = ({ component, mocks }: RenderApollo): void => {
    render(
        <MockedProvider addTypename={false} mocks={mocks}>
            {component}
        </MockedProvider>
    );
};

export { renderApollo };
