import { MockedResponse } from "@apollo/client/testing";

import { CARDS_QUANTITY } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity";
import { CardsQuantityQueryReturn } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/types";
import { QueryMock } from "@app/types/QueryMock";

type CardsQuantityQueryMock = QueryMock<CardsQuantityQueryReturn>;

const buildCardsQuantityQueryMock = ({
    data,
    error,
}: CardsQuantityQueryMock): MockedResponse<CardsQuantityQueryReturn> => ({
    error,
    request: {
        query: CARDS_QUANTITY,
    },
    result: {
        data,
    },
});

export { buildCardsQuantityQueryMock };
