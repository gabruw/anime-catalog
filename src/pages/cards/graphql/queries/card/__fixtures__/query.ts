import { MockedResponse } from "@apollo/client/testing";

import { QueryMock } from "@app/global/types/query-mock";
import { CardQueryReturn, CardQueryVariables } from "@app/pages/cards/graphql/queries/card/types";
import { SERIE } from "@app/pages/series/graphql/queries/serie";

type CardQueryMock = QueryMock<CardQueryReturn, CardQueryVariables>;

const createCardQueryMock = ({
    data,
    error,
    variables,
}: CardQueryMock): MockedResponse<CardQueryReturn, CardQueryVariables> => ({
    error,
    request: {
        query: SERIE,
        variables,
    },
    result: {
        data,
    },
});

export { createCardQueryMock };
