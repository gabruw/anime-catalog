export enum PaginationActionTypes {
    SET_PAGE = "SET_PAGE",
    SET_COUNT = "SET_COUNT",
    HANDLE_NEXT_PAGE = "HANDLE_NEXT_PAGE",
    HANDLE_PREVIOUS_PAGE = "HANDLE_PREVIOUS_PAGE",
}

type SetPage = {
    type: PaginationActionTypes.SET_PAGE;
    payload: number;
};

type SetCount = {
    type: PaginationActionTypes.SET_COUNT;
    payload: number;
};

type HandleNextPage = {
    type: PaginationActionTypes.HANDLE_NEXT_PAGE;
};

type HandlePreviousPage = {
    type: PaginationActionTypes.HANDLE_PREVIOUS_PAGE;
};

type PaginationActions = SetPage | SetCount | HandleNextPage | HandlePreviousPage;

export type { SetPage, SetCount, HandleNextPage, HandlePreviousPage, PaginationActions };
