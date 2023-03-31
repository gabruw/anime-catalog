import { GraphQLError } from "graphql";

import { SetQueryReturn, SetQueryVariables } from "@app/modules/sets/pages/set/graphql/queries/set/types";

export const setQueryErrorMock = new GraphQLError("Error to fetch Set");

export const setQueryVariablesMock: SetQueryVariables = {
    id: "base1",
};

export const setQueryReturnMock: SetQueryReturn = {
    set: {
        id: "base1",
        name: "Base Set",
        releaseDate: "1999-01-09",
        logo: "https://assets.tcgdex.net/en/base/base1/logo/high.png",
    },
};
