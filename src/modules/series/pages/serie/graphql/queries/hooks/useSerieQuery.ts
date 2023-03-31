import { QueryResult, useQuery } from "@apollo/client";

import { SERIE } from "@app/modules/series/pages/serie/graphql/queries/serie";
import { SerieQueryReturn, SerieQueryVariables } from "@app/modules/series/pages/serie/graphql/queries/serie/types";
import { Serie } from "@app/modules/series/types/Serie";

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
