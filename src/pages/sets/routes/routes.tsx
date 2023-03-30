import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { SetsRoutePaths } from "@app/pages/sets/routes/paths";

const Sets = lazy(() =>
    import(/* webpackChunkName: "page-sets" */ "@app/pages/sets").then(({ Sets }) => ({
        default: Sets,
    }))
);

const setsRoutes: ReactElement = (
    <>
        <Route path={SetsRoutePaths.SETS} element={<Sets />} />
    </>
);

export { setsRoutes };
