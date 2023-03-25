import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { HomeRoutePaths } from "@app/pages/home/routes/paths";

const Home = lazy(() =>
    import(/* webpackChunkName: "page-home" */ "@app/pages/home").then(({ Home }) => ({
        default: Home,
    }))
);

const homeRoutes: ReactElement = (
    <>
        <Route path={HomeRoutePaths.HOME} element={<Home />} />
        <Route path={HomeRoutePaths.DEFAULT} element={<Home />} />
    </>
);

export { homeRoutes };
