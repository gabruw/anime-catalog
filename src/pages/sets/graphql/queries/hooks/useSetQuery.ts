import { QueryResult, useQuery } from "@apollo/client";

import { SET } from "@app/pages/sets/graphql/queries/set";
import { SetQueryReturn, SetQueryVariables } from "@app/pages/sets/graphql/queries/set/types";
import { Set } from "@app/pages/sets/types/Set";

type SetQueryHook = {
    set?: SetQueryReturn["set"];
    isLoading: QueryResult<SetQueryReturn>["loading"];
};

const useSetQuery = (setId: Set["id"]): SetQueryHook => {
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
