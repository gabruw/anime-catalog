import { gql } from "@apollo/client";

export const CARDS_QUANTITY = gql`
    query Cards {
        cards {
            id
        }
    }
`;
