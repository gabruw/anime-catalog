import { Card } from "@app/modules/cards/types/Card";

export type CardsQuantityQueryReturn = {
    cards: Pick<Card, "id">[];
};
