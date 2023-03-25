import { render, screen } from "@testing-library/react";

import { SignUp } from "@app/pages/authentication/sign-up";

const setup = (): void => {
    render(<SignUp />);
};

describe("<SignUp />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("SignUp");
        expect(title).toBeVisible();
    });
});
