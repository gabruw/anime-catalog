import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import { cardsQuantityQueryReturnSuccessMock } from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/__fixtures__/constants/success";
import {
    cardsQuantityQueryFailureMock,
    cardsQuantityQuerySuccessMock,
} from "@app/modules/cards/pages/cards/graphql/queries/cards-quantity/__fixtures__/instances";
import {
    CardsQuantityQueryHookReturn,
    useCardsQuantityQuery,
} from "@app/modules/cards/pages/cards/graphql/queries/hooks/useCardsQuantityQuery";

describe("useCardsQuantityQuery()", () => {
    it("should return cards successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<void, CardsQuantityQueryHookReturn>({
            hook: useCardsQuantityQuery,
            mocks: [cardsQuantityQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.quantity).toStrictEqual(cardsQuantityQueryReturnSuccessMock.cards.length);
    });

    it("shouldn't return cards and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<void, CardsQuantityQueryHookReturn>({
            hook: useCardsQuantityQuery,
            mocks: [cardsQuantityQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.quantity).toBeUndefined();
    });
});
