import { ReactElement } from "react";
import { Routes } from "react-router-dom";

import { cardsRoutes } from "@app/modules/cards/routes/routes";
import { errorRoutes } from "@app/modules/error/routes/routes";
import { seriesRoutes } from "@app/modules/series/routes/routes";
import { setsRoutes } from "@app/modules/sets/routes/routes";

const Router = (): ReactElement => (
    <Routes>
        {setsRoutes}
        {cardsRoutes}
        {seriesRoutes}
        {errorRoutes}
    </Routes>
);

export { Router };
