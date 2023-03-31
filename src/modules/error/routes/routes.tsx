import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { ErrorRoutePaths } from "@app/modules/error/routes/paths";

const NotFound = lazy(() =>
    import(/* webpackChunkName: "page-not-found" */ "@app/modules/error/pages/not-found").then(({ NotFound }) => ({
        default: NotFound,
    }))
);

const errorRoutes: ReactElement = (
    <>
        <Route path={ErrorRoutePaths.NOT_FOUND} element={<NotFound />} />
    </>
);

export { errorRoutes };
