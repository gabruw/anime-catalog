import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import {
    cardsQueryReturnFilterMock,
    cardsQueryVariablesFilterMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/filter";
import {
    cardsQueryReturnPaginationMock,
    cardsQueryVariablesPaginationMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/constants/pagination";
import {
    cardsQueryFailureMock,
    cardsQuerySuccessFilterMock,
    cardsQuerySuccessPaginationMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards/__fixtures__/instances";
import {
    CardsQueryHookProps,
    CardsQueryHookReturn,
    useCardsQuery,
} from "@app/modules/cards/pages/cards/graphql/queries/hooks/useCardsQuery";

describe("useCardsQuery()", () => {
    it("should return paginated cards successfully", async () => {
        const props: CardsQueryHookProps = cardsQueryVariablesPaginationMock.filters;

        const { result, waitForNextUpdate } = renderQueryHook<CardsQueryHookProps, CardsQueryHookReturn>({
            props,
            hook: useCardsQuery,
            mocks: [cardsQuerySuccessPaginationMock],
        });

        await waitForNextUpdate();

        expect(result.current.cards).toStrictEqual(cardsQueryReturnPaginationMock.cards);
    });

    it("should return filtered cards by name successfully", async () => {
        const props: CardsQueryHookProps = cardsQueryVariablesFilterMock.filters;

        const { result, waitForNextUpdate } = renderQueryHook<CardsQueryHookProps, CardsQueryHookReturn>({
            props,
            hook: useCardsQuery,
            mocks: [cardsQuerySuccessFilterMock],
        });

        await waitForNextUpdate();

        expect(result.current.cards).toStrictEqual(cardsQueryReturnFilterMock.cards);
    });

    it("shouldn't return cards and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<CardsQueryHookProps, CardsQueryHookReturn>({
            hook: useCardsQuery,
            mocks: [cardsQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.cards).toBeUndefined();
    });
});
