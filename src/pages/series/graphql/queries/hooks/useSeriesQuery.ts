import { QueryResult, useQuery } from "@apollo/client";

import { SETS } from "@app/pages/sets/graphql/queries/sets";
import { SetsQueryReturn } from "@app/pages/sets/graphql/queries/sets/types";

export type SetsQueryHookReturn = {
    sets?: SetsQueryReturn["sets"];
    isLoading: QueryResult["loading"];
};

const useSetsQuery = (): SetsQueryHookReturn => {
    const { data, loading } = useQuery<SetsQueryReturn>(SETS, {
        fetchPolicy: "cache-and-network",
    });

    return {
        sets: data?.sets,
        isLoading: loading,
    };
};

export { useSetsQuery };
