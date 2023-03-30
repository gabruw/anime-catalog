import { Set } from "@app/pages/sets/types/set";

export type SetQueryVariables = {
    id: string;
};

export type SetQueryReturn = {
    set: Set;
};
