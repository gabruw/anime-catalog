import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { SeriesRoutePaths } from "@app/modules/series/routes/paths";

const Serie = lazy(() =>
    import(/* webpackChunkName: "module-series-page-serie" */ "@app/modules/series/pages/serie").then(({ Serie }) => ({
        default: Serie,
    }))
);

const Series = lazy(() =>
    import(/* webpackChunkName: "module-series-page-series" */ "@app/modules/series/pages/series").then(
        ({ Series }) => ({
            default: Series,
        })
    )
);

const seriesRoutes: ReactElement = (
    <>
        <Route path={SeriesRoutePaths.SERIE} element={<Serie />} />
        <Route path={SeriesRoutePaths.SERIES} element={<Series />} />
    </>
);

export { seriesRoutes };
