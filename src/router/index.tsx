import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { authenticationRoutes } from "@app/pages/authentication/routes/routes";
import { errorRoutes } from "@app/pages/error/routes/routes";
import { homeRoutes } from "@app/pages/home/routes/routes";

const Router = (): ReactElement => (
    <Routes>
        {homeRoutes}
        {authenticationRoutes}
        {errorRoutes}
    </Routes>
);

export { Router };
