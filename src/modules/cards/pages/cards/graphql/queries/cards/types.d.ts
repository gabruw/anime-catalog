import { Card } from "@app/modules/cards/types/Card";
import { QueryPagination } from "@app/types/QueryPagination";

export type CardsQueryFilter = {
    hp?: number;
    id?: string;
    name?: string;
    dexId?: number;
    level?: number;
    image?: string;
    stage?: string;
    suffix?: string;
    rarity?: string;
    levelId?: string;
    retreat?: number;
    localId?: string;
    category?: string;
    energyType?: string;
    evolveFrom?: string;
    trainerType?: string;
    description?: string;
    illustrator?: string;
    regulationMark?: string;
};

export type CardsQueryVariables = {
    filters?: CardsQueryFilter;
    pagination?: QueryPagination;
};

export type CardsQueryReturn = {
    cards: Card[];
};
