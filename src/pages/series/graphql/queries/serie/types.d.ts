import { Serie } from "@app/pages/series/types/serie";

export type SerieQueryVariables = {
    id: string;
};

export type SerieQueryReturn = {
    serie: Serie;
};
