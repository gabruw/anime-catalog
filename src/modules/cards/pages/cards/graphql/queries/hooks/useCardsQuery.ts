import { QueryResult, useQuery } from "@apollo/client";

import { CARDS } from "@app/modules/cards/pages/cards/graphql/queries/cards";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";
import { usePaginationContext } from "@app/storages/pagination";

export type CardsQueryHookProps = CardsQueryVariables["filters"];

export type CardsQueryHookReturn = {
    cards?: CardsQueryReturn["cards"];
    isLoading: QueryResult["loading"];
};

const useCardsQuery = (props?: CardsQueryHookProps): CardsQueryHookReturn => {
    const { page, count } = usePaginationContext();

    const { data, loading } = useQuery<CardsQueryReturn, CardsQueryVariables>(CARDS, {
        fetchPolicy: "cache-and-network",
        variables: {
            filters: props,
            pagination: {
                page,
                count,
            },
        },
    });

    return {
        cards: data?.cards,
        isLoading: loading,
    };
};

export { useCardsQuery };
