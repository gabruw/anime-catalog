import { PaginationActions, PaginationActionTypes } from "@app/storages/pagination/actions";
import { PaginationContextState } from "@app/storages/pagination/types";

const paginationReducer = (state: PaginationContextState, action: PaginationActions): PaginationContextState => {
    switch (action.type) {
        case PaginationActionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case PaginationActionTypes.SET_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case PaginationActionTypes.HANDLE_NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        case PaginationActionTypes.HANDLE_PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page - 1,
            };
        default:
            return state;
    }
};

export { paginationReducer };
