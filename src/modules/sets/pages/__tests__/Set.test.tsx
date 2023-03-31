import { render, screen } from "@testing-library/react";

import { Set } from "@app/modules/sets/pages/set";

const setup = (): void => {
    render(<Set />);
};

describe("<Set />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("Set");
        expect(title).toBeVisible();
    });
});
