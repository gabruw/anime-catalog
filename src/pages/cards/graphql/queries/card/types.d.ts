import { Card } from "@app/pages/cards/types/card";

export type CardQueryVariables = {
    id: string;
};

export type CardQueryReturn = {
    card: Card;
};
