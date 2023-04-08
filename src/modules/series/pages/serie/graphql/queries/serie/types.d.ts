import { Serie } from "@app/modules/series/types/Serie";

export type SerieQueryVariables = {
    id: Serie["id"];
};

export type SerieQueryReturn = {
    serie: Serie;
};
