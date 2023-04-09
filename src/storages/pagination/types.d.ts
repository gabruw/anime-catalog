import { ReactNode } from "react";

export type PaginationContextProps = {
    children: ReactNode;
};

export type PaginationContextState = {
    page: number;
    count: number;
};

export type PaginationContextReturn = {
    handleNextPage: () => void;
    handlePreviousPage: () => void;
    setPage: (page: number) => void;
    setCount: (count: number) => void;
} & PaginationContextState;
