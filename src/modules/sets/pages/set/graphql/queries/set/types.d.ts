import { Set } from "@app/modules/sets/types/Set";

export type SetQueryVariables = {
    id: string;
};

export type SetQueryReturn = {
    set: Set;
};
