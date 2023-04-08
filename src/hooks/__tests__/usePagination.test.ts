import { act, renderHook } from "@testing-library/react-hooks";

import { PaginationHookReturn, usePagination } from "@app/hooks/usePagination";

describe("usePagination()", () => {
    it("should change the page", () => {
        const { result } = renderHook<void, PaginationHookReturn>(usePagination);
        expect(result.current.page).toBe(1);

        act(() => {
            result.current.handleNextPage();
        });

        expect(result.current.page).toBe(2);

        act(() => {
            result.current.handlePreviousPage();
        });

        expect(result.current.page).toBe(1);
    });

    it("should change the counter", () => {
        const { result } = renderHook<void, PaginationHookReturn>(usePagination);
        expect(result.current.count).toBe(16);

        act(() => {
            result.current.setCount(32);
        });

        expect(result.current.count).toBe(32);
    });
});
