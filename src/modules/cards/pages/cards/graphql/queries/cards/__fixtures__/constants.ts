import { GraphQLError } from "graphql";

import { CardsQueryReturn } from "@app/modules/cards/pages/cards/graphql/queries/cards/types";

export const cardsQueryErrorMock = new GraphQLError("Error to fetch Cards");

export const cardsQueryReturnMock: CardsQueryReturn = {
    cards: [
        {
            id: "base3-1",
            dexId: [142],
            name: "Aerodactyl",
            category: "Pokemon",
            image: "https://assets.tcgdex.net/en/base/base3/1/high.png",
        },
        {
            id: "base2-1",
            dexId: [36],
            name: "Clefable",
            category: "Pokemon",
            image: "https://assets.tcgdex.net/en/base/base2/1/high.png",
        },
        {
            id: "base5-1",
            dexId: [65],
            name: "Dark Alakazam",
            category: "Pokemon",
            image: "https://assets.tcgdex.net/en/base/base5/1/high.png",
        },
    ],
};
