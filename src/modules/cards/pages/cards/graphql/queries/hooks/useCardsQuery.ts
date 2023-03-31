import { QueryResult, useQuery } from "@apollo/client";

import { CARDS } from "@app/modules/cards/pages/cards/graphql/queries/cards";
import { CardsQueryReturn } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";

export type CardsQueryHookReturn = {
    cards?: CardsQueryReturn["cards"];
    isLoading: QueryResult["loading"];
};

const useCardsQuery = (): CardsQueryHookReturn => {
    const { data, loading } = useQuery<CardsQueryReturn>(CARDS, {
        fetchPolicy: "cache-and-network",
    });

    return {
        cards: data?.cards,
        isLoading: loading,
    };
};

export { useCardsQuery };
