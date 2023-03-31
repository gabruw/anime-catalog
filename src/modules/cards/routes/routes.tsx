import { lazy, ReactElement } from "react";
import { Route } from "react-router-dom";

import { CardsRoutePaths } from "@app/modules/cards/routes/paths";

const Card = lazy(() =>
    import(/* webpackChunkName: "module-cards-page-card" */ "@app/modules/cards/pages/card").then(({ Card }) => ({
        default: Card,
    }))
);

const Cards = lazy(() =>
    import(/* webpackChunkName: "module-cards-page-cards" */ "@app/modules/cards/pages/cards").then(({ Cards }) => ({
        default: Cards,
    }))
);

const cardsRoutes: ReactElement = (
    <>
        <Route path={CardsRoutePaths.CARD} element={<Card />} />

        <Route path={CardsRoutePaths.HOME} element={<Cards />} />
        <Route path={CardsRoutePaths.CARDS} element={<Cards />} />
        <Route path={CardsRoutePaths.DEFAULT} element={<Cards />} />
    </>
);

export { cardsRoutes };
