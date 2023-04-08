import { MockedResponse } from "@apollo/client/testing";

import { CARDS } from "@app/modules/cards/pages/cards/graphql/queries/cards";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";
import { QueryMock } from "@app/types/QueryMock";

type CardsQueryMock = QueryMock<CardsQueryReturn, CardsQueryVariables>;

const buildCardsQueryMock = ({
    data,
    error,
    variables,
}: CardsQueryMock): MockedResponse<CardsQueryReturn, CardsQueryVariables> => ({
    error,
    request: {
        query: CARDS,
        variables,
    },
    result: {
        data,
    },
});

export { buildCardsQueryMock };
