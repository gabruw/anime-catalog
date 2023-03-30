import { QueryResult, useQuery } from "@apollo/client";

import { SeriesQueryReturn } from "@app/pages/series/graphql/queries/series/types";
import { SETS } from "@app/pages/sets/graphql/queries/sets";

export type SeriesQueryHookReturn = {
    isLoading: QueryResult["loading"];
    series?: SeriesQueryReturn["series"];
};

const useSeriesQuery = (): SeriesQueryHookReturn => {
    const { data, loading } = useQuery<SeriesQueryReturn>(SETS, {
        fetchPolicy: "cache-and-network",
    });

    return {
        isLoading: loading,
        series: data?.series,
    };
};

export { useSeriesQuery };
