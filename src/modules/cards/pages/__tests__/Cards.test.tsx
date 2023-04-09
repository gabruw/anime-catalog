import { renderReduxApollo } from "@app/__fixtures__/functions/render/renderReduxApollo";
import { Cards } from "@app/modules/cards/pages/cards";
import {
    cardsQuerySuccessLastPaginationMock,
    cardsQuerySuccessPaginationMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/instances";

const setup = (): void => {
    renderReduxApollo({
        component: <Cards />,
        mocks: [cardsQuerySuccessPaginationMock, cardsQuerySuccessLastPaginationMock],
    });
};

describe("<Cards />", () => {
    it("should render", () => {
        setup();
    });
});
