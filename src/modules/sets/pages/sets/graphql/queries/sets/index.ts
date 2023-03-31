import { gql } from "@apollo/client";

export const SETS = gql`
    query Sets {
        sets {
            id
            name
            logo
            releaseDate
        }
    }
`;
