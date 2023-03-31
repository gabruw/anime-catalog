import { gql } from "@apollo/client";

export const SERIES = gql`
    query Series {
        series {
            id
            name
            logo
        }
    }
`;
