import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { SeriesRoutePaths } from "@app/pages/series/routes/paths";

const Series = lazy(() =>
    import(/* webpackChunkName: "page-series" */ "@app/pages/series").then(({ Series }) => ({
        default: Series,
    }))
);

const seriesRoutes: ReactElement = (
    <>
        <Route path={SeriesRoutePaths.SERIES} element={<Series />} />
    </>
);

export { seriesRoutes };
