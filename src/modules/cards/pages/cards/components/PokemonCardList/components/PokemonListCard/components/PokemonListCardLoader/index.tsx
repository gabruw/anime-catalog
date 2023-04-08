import { Skeleton } from "@chakra-ui/react";
import { ReactElement } from "react";

const PokemonListCardLoader = (): ReactElement => (
    <Skeleton data-testid="pokemon-list-card-loader" h={300} w="100%" maxW={220} fadeDuration={1} />
);

export { PokemonListCardLoader };
