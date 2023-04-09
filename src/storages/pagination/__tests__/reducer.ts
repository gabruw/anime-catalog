import {
    HandleNextPage,
    HandlePreviousPage,
    PaginationActionTypes,
    SetCount,
    SetPage,
} from "@app/storages/pagination/actions";
import { paginationReducer } from "@app/storages/pagination/reducer";
import { PaginationContextState } from "@app/storages/pagination/types";

const state: PaginationContextState = {
    page: 1,
    count: 16,
};

describe("paginationReducer()", () => {
    describe("when count action is dispatched", () => {
        it("should return the expected count value on dispatch set count action", () => {
            const setCountAction: SetCount = {
                type: PaginationActionTypes.SET_COUNT,
                payload: 32,
            };

            const { count } = paginationReducer(state, setCountAction);
            expect(count).toBe(setCountAction.payload);
        });
    });

    describe("when page action is dispatched", () => {
        it("should return the expected page value on dispatch set page action", () => {
            const setPageAction: SetPage = {
                type: PaginationActionTypes.SET_PAGE,
                payload: 2,
            };

            const { page } = paginationReducer(state, setPageAction);
            expect(page).toBe(setPageAction.payload);
        });

        it("should return the page value equals two on dispatch handle next page action", () => {
            const handleNextPage: HandleNextPage = {
                type: PaginationActionTypes.HANDLE_NEXT_PAGE,
            };

            const { page } = paginationReducer(state, handleNextPage);
            expect(page).toBe(state.page + 1);
        });

        it("should return the page value equals one on dispatch handle previous page action", () => {
            const handlePreviousPage: HandlePreviousPage = {
                type: PaginationActionTypes.HANDLE_PREVIOUS_PAGE,
            };

            const { page } = paginationReducer(state, handlePreviousPage);
            expect(page).toBe(state.page - 1);
        });
    });
});
