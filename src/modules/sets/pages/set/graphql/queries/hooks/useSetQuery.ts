import { QueryResult, useQuery } from "@apollo/client";

import { SET } from "@app/modules/sets/pages/set/graphql/queries/set";
import { SetQueryReturn, SetQueryVariables } from "@app/modules/sets/pages/set/graphql/queries/set/types";
import { Set } from "@app/modules/sets/types/Set";

export type SetQueryHookParams = {
    setId: Set["id"];
};

export type SetQueryHookReturn = {
    set?: SetQueryReturn["set"];
    isLoading: QueryResult["loading"];
};

const useSetQuery = ({ setId }: SetQueryHookParams): SetQueryHookReturn => {
    const { data, loading } = useQuery<SetQueryReturn, SetQueryVariables>(SET, {
        fetchPolicy: "network-only",
        variables: {
            id: setId,
        },
    });

    return {
        set: data?.set,
        isLoading: loading,
    };
};

export { useSetQuery };
