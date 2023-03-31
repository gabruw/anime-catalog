import { render, screen } from "@testing-library/react";

import { Serie } from "@app/modules/series/pages/serie";

const setup = (): void => {
    render(<Serie />);
};

describe("<Serie />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Serie");
        expect(title).toBeVisible();
    });
});
