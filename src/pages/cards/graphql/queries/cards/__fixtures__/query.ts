import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/global/types/query-mock";
import { CARDS } from "@app/pages/cards/graphql/queries/cards";
import { CardsQueryReturn } from "@app/pages/cards/graphql/queries/cards/types";

type CardsQueryMock = QueryMock<CardsQueryReturn>;

const buildCardsQueryMock = ({ data, error }: CardsQueryMock): MockedResponse<CardsQueryReturn, void> => ({
    error,
    request: {
        query: CARDS,
    },
    result: {
        data,
    },
});

export { buildCardsQueryMock };
