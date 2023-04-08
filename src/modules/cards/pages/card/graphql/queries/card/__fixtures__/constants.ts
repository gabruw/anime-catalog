import { GraphQLError } from "graphql";

import { CardQueryReturn, CardQueryVariables } from "@app/modules/cards/pages/card/graphql/queries/card/types";

export const cardQueryErrorMock = new GraphQLError("Error to fetch Card");

export const cardQueryVariablesMock: CardQueryVariables = {
    id: "base3-1",
};

export const cardQueryReturnMock: CardQueryReturn = {
    card: {
        id: "base3-1",
        dexId: [142],
        name: "Aerodactyl",
        category: "Pokemon",
        image: "https://assets.tcgdex.net/en/base/base3/1",
    },
};
