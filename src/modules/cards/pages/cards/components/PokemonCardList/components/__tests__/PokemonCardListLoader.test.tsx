import { render, screen } from "@testing-library/react";

import { PokemonCardListLoader } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonCardListLoader";

const setup = () => {
    render(<PokemonCardListLoader />);
};

describe("<PokemonCardListLoader />", () => {
    it("should render", async () => {
        setup();

        const loaders = screen.getAllByTestId<HTMLDivElement>("pokemon-list-card-loader");
        expect(loaders).toHaveLength(4);
    });
});
