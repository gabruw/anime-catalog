import { gql } from "@apollo/client";

export const SERIE = gql`
    query Serie($id: ID!) {
        serie(id: $id) {
            id
            name
            logo
        }
    }
`;
