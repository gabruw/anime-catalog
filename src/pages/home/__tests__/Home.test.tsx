import { render, screen } from "@testing-library/react";

import { Home } from "@app/pages/home";

const setup = (): void => {
    render(<Home />);
};

describe("<Home />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Home");
        expect(title).toBeVisible();
    });
});
