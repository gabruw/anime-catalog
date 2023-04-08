import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

import { PaginationFooter } from "@app/components/PaginationFooter";
import { PokemonCardListLoader } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonCardListLoader";
import { PokemonListCard } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard";
import { useCardsQuery } from "@app/modules/cards/pages/cards/graphql/queries/hooks/useCardsQuery";

const PokemonCardList = (): ReactElement => {
    const { cards, page, isLoading, handleNextPage, handlePreviousPage } = useCardsQuery();

    return (
        <Box display="flex" flexWrap="wrap" gap={15}>
            {isLoading ? (
                <PokemonCardListLoader />
            ) : (
                cards?.map(({ id, name, image }) => <PokemonListCard key={id} name={name} image={image} />)
            )}

            <PaginationFooter page={page} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
        </Box>
    );
};

export { PokemonCardList };
