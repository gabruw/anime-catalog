import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { SetsRoutePaths } from "@app/modules/sets/routes/paths";

const Set = lazy(() =>
    import(/* webpackChunkName: "module-sets-page-set" */ "@app/modules/sets/pages/set").then(({ Set }) => ({
        default: Set,
    }))
);

const Sets = lazy(() =>
    import(/* webpackChunkName: "module-sets-page-sets" */ "@app/modules/sets/pages/sets").then(({ Sets }) => ({
        default: Sets,
    }))
);

const setsRoutes: ReactElement = (
    <>
        <Route path={SetsRoutePaths.SET} element={<Set />} />
        <Route path={SetsRoutePaths.SETS} element={<Sets />} />
    </>
);

export { setsRoutes };
