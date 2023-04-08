import { GraphQLError } from "graphql";

import { SetsQueryReturn } from "@app/modules/sets/pages/sets/graphql/queries/sets/types";

export const setsQueryErrorMock = new GraphQLError("Error to fetch Sets");

export const setsQueryReturnMock: SetsQueryReturn = {
    sets: [
        {
            id: "base1",
            name: "Base Set",
            releaseDate: "1999-01-09",
            logo: "https://assets.tcgdex.net/en/base/base1/logo",
        },
        {
            id: "base2",
            name: "Jungle",
            releaseDate: "1999-06-16",
            logo: "https://assets.tcgdex.net/en/base/base2/logo",
        },
        {
            id: "basep",
            name: "Wizards Black Star Promos",
            releaseDate: "1999-07-01",
            logo: "https://assets.tcgdex.net/en/base/basep/logo",
        },
    ],
};
