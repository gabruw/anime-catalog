import { render, screen } from "@testing-library/react";

import { Cards } from "@app/pages/cards";

const setup = (): void => {
    render(<Cards />);
};

describe("<Cards />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Cards");
        expect(title).toBeVisible();
    });
});
