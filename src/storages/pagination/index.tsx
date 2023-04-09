import { createContext, useContext, useMemo, useReducer } from "react";

import { PaginationActionTypes } from "@app/storages/pagination/actions";
import { DEFAULT_COUNT, DEFAULT_PAGE } from "@app/storages/pagination/constants";
import { paginationReducer } from "@app/storages/pagination/reducer";
import {
    PaginationContextProps,
    PaginationContextReturn,
    PaginationContextState,
} from "@app/storages/pagination/types";

const PaginationContext = createContext<PaginationContextReturn>({} as PaginationContextReturn);

const INITIAL_STATE: PaginationContextState = {
    page: DEFAULT_PAGE,
    count: DEFAULT_COUNT,
};

export const PaginationContextProvider = ({ children }: PaginationContextProps) => {
    const [state, dispatch] = useReducer(paginationReducer, INITIAL_STATE);

    const setPage = (page: number) => {
        dispatch({
            type: PaginationActionTypes.SET_PAGE,
            payload: page,
        });
    };

    const setCount = (count: number) => {
        dispatch({
            type: PaginationActionTypes.SET_COUNT,
            payload: count,
        });
    };

    const handleNextPage = () => {
        dispatch({
            type: PaginationActionTypes.HANDLE_NEXT_PAGE,
        });
    };

    const handlePreviousPage = () => {
        dispatch({
            type: PaginationActionTypes.HANDLE_PREVIOUS_PAGE,
        });
    };

    const providerValues = useMemo<PaginationContextReturn>(
        () => ({
            ...state,
            setPage,
            setCount,
            handleNextPage,
            handlePreviousPage,
        }),
        [state]
    );

    return <PaginationContext.Provider value={providerValues}>{children}</PaginationContext.Provider>;
};

export const usePaginationContext = () => useContext<PaginationContextReturn>(PaginationContext);
