import { AbsoluteCenter, Spinner } from "@chakra-ui/react";
import { ReactElement } from "react";

const ScreenLoader = (): ReactElement => (
    <AbsoluteCenter>
        <Spinner size="lg" />
    </AbsoluteCenter>
);

export { ScreenLoader };
