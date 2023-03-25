import { ChakraProvider } from "@chakra-ui/react";
import { I18nextProvider } from "react-i18next";

import { Router } from "@app/router";
import { themes } from "@app/themes";
import { i18n } from "@app/translations";

const App = () => (
    <ChakraProvider theme={themes}>
        <I18nextProvider i18n={i18n}>
            <Router />
        </I18nextProvider>
    </ChakraProvider>
);

export { App };
