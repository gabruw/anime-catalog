import { AbsoluteCenter, Spinner } from "@chakra-ui/react";
import { ReactElement } from "react";

const ScreenLoader = (): ReactElement => (
    <AbsoluteCenter data-testid="screen-loader-container">
        <Spinner data-testid="screen-loader-spinner" size="lg" />
    </AbsoluteCenter>
);

export { ScreenLoader };
