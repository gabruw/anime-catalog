import { Dispatch, SetStateAction, useState } from "react";

export const DEFAULT_COUNT = 16;
export const DEFAULT_PAGINATION = 1;

export type PaginationHookReturn = {
    page: number;
    count: number;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    setCount: Dispatch<SetStateAction<number>>;
};

const usePagination = (): PaginationHookReturn => {
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(16);

    const handleNextPage = () => setPage((prev) => prev + 1);

    const handlePreviousPage = () => setPage((prev) => prev - 1);

    return {
        page,
        count,
        setCount,
        handleNextPage,
        handlePreviousPage,
    };
};

export { usePagination };
