import { GraphQLError } from "graphql";

import { SerieQueryReturn, SerieQueryVariables } from "@app/modules/series/pages/serie/graphql/queries/serie/types";

export const serieQueryErrorMock = new GraphQLError("Error to fetch Serie");

export const serieQueryVariablesMock: SerieQueryVariables = {
    id: "base",
};

export const serieQueryReturnMock: SerieQueryReturn = {
    serie: {
        id: "base",
        name: "Base",
        logo: "https://assets.tcgdex.net/en/base/base1/logo",
    },
};
