import { gql } from "@apollo/client";

export const SET = gql`
    query Set($id: ID!) {
        set(id: $id) {
            id
            name
            logo
            releaseDate
        }
    }
`;
