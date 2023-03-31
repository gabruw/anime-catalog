import { render, screen } from "@testing-library/react";

import { Card } from "@app/modules/cards/pages/card";

const setup = (): void => {
    render(<Card />);
};

describe("<Card />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Card");
        expect(title).toBeVisible();
    });
});
