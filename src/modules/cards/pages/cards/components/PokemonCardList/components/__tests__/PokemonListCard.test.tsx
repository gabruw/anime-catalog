import { screen } from "@testing-library/react";

import { renderRedux } from "@app/__fixtures__/functions/render/renderRedux";
import { ImageQuality } from "@app/constants/ImageQuality";
import { createImageLink } from "@app/functions/createImageLink";
import {
    FALLBACK_IMAGE,
    PokemonListCard,
    PokemonListCardProps,
} from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard";
import { cards } from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/cards.json";

const { name, image } = cards[0];

const props: PokemonListCardProps = {
    name,
    image,
};

const setup = (defaultProps = props) => {
    renderRedux({
        component: <PokemonListCard {...defaultProps} />,
    });
};

describe("<PokemonListCard />", () => {
    it("should render", async () => {
        const imageLink = createImageLink(image!, ImageQuality.HIGH);

        setup();

        const card = await screen.findByTestId<HTMLImageElement>("pokemon-list-card");
        expect(card).toBeInTheDocument();

        expect(card.src).toBe(imageLink);
        expect(card.alt).toBe(props.name);
        expect(card.title).toBe(props.name);
    });

    it("shouldn't render the image", async () => {
        setup({ ...props, image: null });

        const card = await screen.findByTestId<HTMLImageElement>("pokemon-list-card");
        expect(card.src).toBe(FALLBACK_IMAGE);
    });
});
