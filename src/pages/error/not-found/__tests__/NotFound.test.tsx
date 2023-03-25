import { render, screen } from "@testing-library/react";

import { NotFound } from "@app/pages/error/not-found";

const setup = (): void => {
    render(<NotFound />);
};

describe("<NotFound />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Not Found");
        expect(title).toBeVisible();
    });
});
