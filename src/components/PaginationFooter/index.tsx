import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, NumberInput, NumberInputField, Stack } from "@chakra-ui/react";
import { t } from "i18next";
import { ReactElement } from "react";

import { PaginationFooterLoader } from "@app/components/PaginationFooter/components/PaginationFooterLoader";
import { usePaginationContext } from "@app/storages/pagination";

export type PaginationFooterProps = {
    quantity?: number;
    isLoading: boolean;
};

const PaginationFooter = ({ isLoading, quantity = 1 }: PaginationFooterProps): ReactElement => {
    const { page, count, setPage, handleNextPage, handlePreviousPage } = usePaginationContext();

    const maxPages = quantity / count;

    return (
        <Stack spacing={4} direction="row" align="center" w="100%">
            {isLoading ? (
                <PaginationFooterLoader />
            ) : (
                <>
                    <Button leftIcon={<ArrowBackIcon />} onClick={handlePreviousPage} isDisabled={page === 1}>
                        {t("pagination.previous")}
                    </Button>

                    <NumberInput
                        min={1}
                        maxW={20}
                        value={page}
                        max={maxPages}
                        defaultValue={1}
                        onChange={(_, value) => setPage(value)}
                    >
                        <NumberInputField />
                    </NumberInput>

                    <Button rightIcon={<ArrowForwardIcon />} onClick={handleNextPage} isDisabled={page === maxPages}>
                        {t("pagination.next")}
                    </Button>
                </>
            )}
        </Stack>
    );
};

export { PaginationFooter };
