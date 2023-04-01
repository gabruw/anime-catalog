import { GraphQLError } from "graphql";

export type QueryMock<TData, TVariables = void> = {
    data?: TData;
    error?: GraphQLError;
    variables?: TVariables;
};
