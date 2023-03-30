import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { CardsRoutePaths } from "@app/pages/cards/routes/paths";

const Cards = lazy(() =>
    import(/* webpackChunkName: "page-cards" */ "@app/pages/cards").then(({ Cards }) => ({
        default: Cards,
    }))
);

const cardsRoutes: ReactElement = (
    <>
        <Route path={CardsRoutePaths.HOME} element={<Cards />} />
        <Route path={CardsRoutePaths.CARDS} element={<Cards />} />
        <Route path={CardsRoutePaths.DEFAULT} element={<Cards />} />
    </>
);

export { cardsRoutes };
