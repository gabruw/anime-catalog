import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { cardsRoutes } from "@app/pages/cards/routes/routes";
import { errorRoutes } from "@app/pages/error/routes/routes";
import { seriesRoutes } from "@app/pages/series/routes/routes";
import { setsRoutes } from "@app/pages/sets/routes/routes";

const Router = (): ReactElement => (
    <Routes>
        {setsRoutes}
        {cardsRoutes}
        {seriesRoutes}
        {errorRoutes}
    </Routes>
);

export { Router };
