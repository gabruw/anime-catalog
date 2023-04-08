import { Set } from "@app/modules/sets/types/Set";

export type SetQueryVariables = {
    id: Set["id"];
};

export type SetQueryReturn = {
    set: Set;
};
