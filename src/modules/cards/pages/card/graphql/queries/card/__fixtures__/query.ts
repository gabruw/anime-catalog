import { MockedResponse } from "@apollo/client/testing";

import { CARD } from "@app/modules/cards/pages/card/graphql/queries/card";
import { CardQueryReturn, CardQueryVariables } from "@app/modules/cards/pages/card/graphql/queries/card/types";
import { QueryMock } from "@app/types/query-mock";

type CardQueryMock = QueryMock<CardQueryReturn, CardQueryVariables>;

const createCardQueryMock = ({
    data,
    error,
    variables,
}: CardQueryMock): MockedResponse<CardQueryReturn, CardQueryVariables> => ({
    error,
    request: {
        query: CARD,
        variables,
    },
    result: {
        data,
    },
});

export { createCardQueryMock };
