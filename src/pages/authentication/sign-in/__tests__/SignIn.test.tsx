import { render, screen } from "@testing-library/react";

import { SignIn } from "@app/pages/authentication/sign-in";

const setup = (): void => {
    render(<SignIn />);
};

describe("<SignIn />", () => {
    it("should render", () => {
        setup();

        const title: HTMLDivElement = screen.getByText("SignIn");
        expect(title).toBeVisible();
    });
});
