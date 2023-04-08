import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, NumberInput, NumberInputField, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

export type PaginationFooterProps = {
    page: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
};

const PaginationFooter = ({ page, handleNextPage, handlePreviousPage }: PaginationFooterProps): ReactElement => (
    <Stack spacing={4} direction="row" align="center" w="100%">
        <Button leftIcon={<ArrowBackIcon />} onClick={handlePreviousPage} isDisabled={page === 1}>
            Previous
        </Button>

        <NumberInput maxW={20} defaultValue={1} min={1} max={999} value={page}>
            <NumberInputField />
        </NumberInput>

        <Button rightIcon={<ArrowForwardIcon />} onClick={handleNextPage} isDisabled={page === 999}>
            Next
        </Button>
    </Stack>
);

export { PaginationFooter };
