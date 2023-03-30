import { QueryResult, useQuery } from "@apollo/client";

import { SERIE } from "@app/pages/series/graphql/queries/serie";
import { SerieQueryReturn, SerieQueryVariables } from "@app/pages/series/graphql/queries/serie/types";
import { Serie } from "@app/pages/series/types/serie";

export type SerieQueryHookParams = {
    serieId: Serie["id"];
};

export type SerieQueryHookReturn = {
    serie?: SerieQueryReturn["serie"];
    isLoading: QueryResult["loading"];
};

const useSerieQuery = ({ serieId }: SerieQueryHookParams): SerieQueryHookReturn => {
    const { data, loading } = useQuery<SerieQueryReturn, SerieQueryVariables>(SERIE, {
        fetchPolicy: "network-only",
        variables: {
            id: serieId,
        },
    });

    return {
        serie: data?.serie,
        isLoading: loading,
    };
};

export { useSerieQuery };
