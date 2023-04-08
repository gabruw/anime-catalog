import { Card } from "@app/modules/cards/types/Card";

export type CardQueryVariables = {
    id: Card["id"];
};

export type CardQueryReturn = {
    card: Card;
};
