import { GraphQLError } from "graphql";

import { SetQueryReturn } from "@app/pages/sets/graphql/queries/set/types";

export const mockSetQueryError = new GraphQLError("Error to fetch Set");

export const mockSetQueryReturn: SetQueryReturn = {
    set: {
        id: "base1",
        name: "Base Set",
        releaseDate: "1999-01-09",
        logo: "https://assets.tcgdex.net/en/base/base1/logo/high.png",
    },
};
