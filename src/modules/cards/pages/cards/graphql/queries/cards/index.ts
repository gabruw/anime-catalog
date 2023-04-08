import { gql } from "@apollo/client";

export const CARDS = gql`
    query Cards($filters: CardsFilters, $pagination: Pagination) {
        cards(filters: $filters, pagination: $pagination) {
            id
            dexId
            name
            image
            category
        }
    }
`;
