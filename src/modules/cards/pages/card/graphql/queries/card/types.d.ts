import { Card } from "@app/modules/cards/types/Card";

export type CardQueryVariables = {
    id: string;
};

export type CardQueryReturn = {
    card: Card;
};
