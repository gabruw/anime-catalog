import { QueryResult, useQuery } from "@apollo/client";

import { SETS } from "@app/pages/sets/graphql/queries/sets";
import { SetsQueryReturn } from "@app/pages/sets/graphql/queries/sets/types";

export type SetsQueryHook = {
    sets?: SetsQueryReturn["sets"];
    isLoading: QueryResult<SetsQueryReturn>["loading"];
};

const useSetsQuery = (): SetsQueryHook => {
    const { data, loading } = useQuery<SetsQueryReturn>(SETS, {
        fetchPolicy: "network-only",
    });

    return {
        sets: data?.sets,
        isLoading: loading,
    };
};

export { useSetsQuery };
