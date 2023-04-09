import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

import { PaginationFooter } from "@app/components/PaginationFooter";
import { PokemonCardListLoader } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonCardListLoader";
import { PokemonListCard } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard";
import { useCardsQuantityQuery } from "@app/modules/cards/pages/cards/graphql/queries/hooks/useCardsQuantityQuery";
import { useCardsQuery } from "@app/modules/cards/pages/cards/graphql/queries/hooks/useCardsQuery";

const PokemonCardList = (): ReactElement => {
    const { cards, isLoading: isCardsLoading } = useCardsQuery();
    const { quantity, isLoading: isCardsQuantityLoading } = useCardsQuantityQuery();

    return (
        <Box display="flex" flexWrap="wrap" gap={15}>
            {isCardsLoading ? (
                <PokemonCardListLoader />
            ) : (
                cards?.map(({ id, name, image }) => <PokemonListCard key={id} name={name} image={image} />)
            )}

            <PaginationFooter quantity={quantity} isLoading={isCardsQuantityLoading} />
        </Box>
    );
};

export { PokemonCardList };
