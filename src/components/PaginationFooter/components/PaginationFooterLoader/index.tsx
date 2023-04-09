import { Skeleton } from "@chakra-ui/react";
import { ReactElement } from "react";

const PaginationFooterLoader = (): ReactElement => (
    <>
        <Skeleton data-testid="pagination-footer-loader-previous-button" h={10} w="100%" maxW={100} fadeDuration={1} />
        <Skeleton data-testid="pagination-footer-loader-input" h={10} w="100%" maxW={20} fadeDuration={1} />
        <Skeleton data-testid="pagination-footer-loader-next-button" h={10} w="100%" maxW={100} fadeDuration={1} />
    </>
);

export { PaginationFooterLoader };
