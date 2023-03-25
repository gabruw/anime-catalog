import { extendTheme } from "@chakra-ui/react";

import { darkThemeConfig } from "@app/themes/dark";
import { lightThemeConfig } from "@app/themes/light";

const themes = extendTheme({
    darkThemeConfig,
    lightThemeConfig,
});

export { themes };
