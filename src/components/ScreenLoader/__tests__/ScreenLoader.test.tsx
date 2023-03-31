import { render, screen } from "@testing-library/react";

import { ScreenLoader } from "@app/components/ScreenLoader";

describe("<ScreenLoader />", () => {
    it("should render the spinner container", () => {
        render(<ScreenLoader />);

        const container = screen.getByTestId("screen-loader-container");
        expect(container).toBeVisible();
    });

    it("should render the spinner", () => {
        render(<ScreenLoader />);

        const spinner = screen.getByTestId("screen-loader-spinner");
        expect(spinner).toBeVisible();
    });
});
