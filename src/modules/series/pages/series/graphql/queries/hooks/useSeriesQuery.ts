import { QueryResult, useQuery } from "@apollo/client";

import { SERIES } from "@app/modules/series/pages/series/graphql/queries/series";
import { SeriesQueryReturn } from "@app/modules/series/pages/series/graphql/queries/series/types";

export type SeriesQueryHookReturn = {
    isLoading: QueryResult["loading"];
    series?: SeriesQueryReturn["series"];
};

const useSeriesQuery = (): SeriesQueryHookReturn => {
    const { data, loading } = useQuery<SeriesQueryReturn>(SERIES, {
        fetchPolicy: "cache-and-network",
    });

    return {
        isLoading: loading,
        series: data?.series,
    };
};

export { useSeriesQuery };
