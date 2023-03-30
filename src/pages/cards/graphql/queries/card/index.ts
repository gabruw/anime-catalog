import { gql } from "@apollo/client";

export const CARD = gql`
    query Card($id: ID!) {
        card(id: $id) {
            id
            dexId
            name
            image
            category
        }
    }
`;
