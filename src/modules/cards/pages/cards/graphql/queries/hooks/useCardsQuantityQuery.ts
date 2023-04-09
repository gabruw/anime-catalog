import { QueryResult, useQuery } from "@apollo/client";

import { CARDS_QUANTITY } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity";
import { CardsQuantityQueryReturn } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/types";

export type CardsQuantityQueryHookReturn = {
    quantity?: number;
    isLoading: QueryResult["loading"];
};

const useCardsQuantityQuery = (): CardsQuantityQueryHookReturn => {
    const { data, loading } = useQuery<CardsQuantityQueryReturn>(CARDS_QUANTITY, {
        fetchPolicy: "no-cache",
    });

    return {
        isLoading: loading,
        quantity: data?.cards.length,
    };
};

export { useCardsQuantityQuery };
