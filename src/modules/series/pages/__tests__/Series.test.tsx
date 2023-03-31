import { render, screen } from "@testing-library/react";

import { Series } from "@app/modules/series/pages/series";

const setup = (): void => {
    render(<Series />);
};

describe("<Series />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Series");
        expect(title).toBeVisible();
    });
});
