import { renderReduxApollo } from "@app/__fixtures__/functions/render/renderReduxApollo";
import { PokemonCardList } from "@app/modules/cards/pages/cards/components/PokemonCardList";
import {
    cardsQuerySuccessLastPaginationMock,
    cardsQuerySuccessPaginationMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/instances";

const setup = () => {
    renderReduxApollo({
        component: <PokemonCardList />,
        mocks: [cardsQuerySuccessPaginationMock, cardsQuerySuccessLastPaginationMock],
    });
};

describe("<PokemonCardList />", () => {
    it("should ", () => {
        setup();
    });
});
