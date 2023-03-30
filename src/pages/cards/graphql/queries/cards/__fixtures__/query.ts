import { MockedResponse } from "@apollo/client/testing";

import { CARDS } from "@app/pages/cards/graphql/queries/cards";
import { CardsQueryReturn } from "@app/pages/cards/graphql/queries/cards/types";
import { QueryMock } from "@app/types/query-mock";

type CardsQueryMock = QueryMock<CardsQueryReturn>;

const buildCardsQueryMock = ({ data, error }: CardsQueryMock): MockedResponse<CardsQueryReturn> => ({
    error,
    request: {
        query: CARDS,
    },
    result: {
        data,
    },
});

export { buildCardsQueryMock };
