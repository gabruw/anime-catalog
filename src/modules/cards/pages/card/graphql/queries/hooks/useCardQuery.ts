import { QueryResult, useQuery } from "@apollo/client";

import { CARD } from "@app/modules/cards/pages/card/graphql/queries/card";
import { CardQueryReturn, CardQueryVariables } from "@app/modules/cards/pages/card/graphql/queries/card/types";
import { Card } from "@app/modules/cards/types/Card";

export type CardQueryHookParams = {
    cardId: Card["id"];
};

export type CardQueryHookReturn = {
    card?: CardQueryReturn["card"];
    isLoading: QueryResult["loading"];
};

const useCardQuery = ({ cardId }: CardQueryHookParams): CardQueryHookReturn => {
    const { data, loading } = useQuery<CardQueryReturn, CardQueryVariables>(CARD, {
        fetchPolicy: "network-only",
        variables: {
            id: cardId,
        },
    });

    return {
        card: data?.card,
        isLoading: loading,
    };
};

export { useCardQuery };
