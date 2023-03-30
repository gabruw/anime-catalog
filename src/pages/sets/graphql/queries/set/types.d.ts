import { Set } from "@app/pages/sets/types/Set";

export type SetQueryVariables = {
    id: string;
};

export type SetQueryReturn = {
    set: Set;
};
