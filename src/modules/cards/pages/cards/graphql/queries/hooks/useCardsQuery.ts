import { QueryResult, useQuery } from "@apollo/client";

import { PaginationHookReturn, usePagination } from "@app/hooks/usePagination";
import { CARDS } from "@app/modules/cards/pages/cards/graphql/queries/cards";
import { CardsQueryReturn, CardsQueryVariables } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";

export type CardsQueryHookProps = CardsQueryVariables["filters"];

export type CardsQueryHookReturn = {
    cards?: CardsQueryReturn["cards"];
    isLoading: QueryResult["loading"];
} & PaginationHookReturn;

const useCardsQuery = (props?: CardsQueryHookProps): CardsQueryHookReturn => {
    const pagination = usePagination();

    const { data, loading } = useQuery<CardsQueryReturn, CardsQueryVariables>(CARDS, {
        fetchPolicy: "cache-and-network",
        variables: {
            filters: props,
            pagination: {
                page: pagination.page,
                count: pagination.count,
            },
        },
    });

    return {
        ...pagination,
        cards: data?.cards,
        isLoading: loading,
    };
};

export { useCardsQuery };
