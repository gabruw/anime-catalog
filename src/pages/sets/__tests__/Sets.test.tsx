import { render, screen } from "@testing-library/react";

import { Sets } from "@app/pages/sets";

const setup = (): void => {
    render(<Sets />);
};

describe("<Sets />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Sets");
        expect(title).toBeVisible();
    });
});
