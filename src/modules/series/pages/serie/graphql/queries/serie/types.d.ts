import { Serie } from "@app/modules/series/types/Serie";

export type SerieQueryVariables = {
    id: string;
};

export type SerieQueryReturn = {
    serie: Serie;
};
