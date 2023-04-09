import { Image } from "@chakra-ui/react";
import { ReactElement, useState } from "react";

import { useImageLink } from "@app/hooks/useImageLink";
import { PokemonListCardLoader } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard/components/PokemonListCardLoader";
import { Card } from "@app/modules/cards/types/Card";

export const FALLBACK_IMAGE = "https://via.placeholder.com/200x300";

export type PokemonListCardProps = Pick<Card, "name" | "image">;

const PokemonListCard = ({ name, image }: PokemonListCardProps): ReactElement => {
    const { getImageLink } = useImageLink();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const imageSource = getImageLink(image, FALLBACK_IMAGE);

    return (
        <>
            {isLoading && <PokemonListCardLoader />}

            <Image
                data-testid="pokemon-list-card"
                h={300}
                w="100%"
                maxW={220}
                alt={name}
                title={name}
                src={imageSource}
                hidden={isLoading}
                onLoad={() => setIsLoading(false)}
            />
        </>
    );
};

export { PokemonListCard };
