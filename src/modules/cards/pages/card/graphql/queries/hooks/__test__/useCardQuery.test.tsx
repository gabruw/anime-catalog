import { renderQueryHook } from "@app/__fixtures__/functions/renderHook/renderQueryHook";
import {
    cardQueryReturnMock,
    cardQueryVariablesMock,
} from "@app/modules/cards/pages/card/graphql/queries/card/__fixtures__/constants";
import {
    cardQueryFailureMock,
    cardQuerySuccessMock,
} from "@app/modules/cards/pages/card/graphql/queries/card/__fixtures__/instances";
import {
    CardQueryHookProps,
    CardQueryHookReturn,
    useCardQuery,
} from "@app/modules/cards/pages/card/graphql/queries/hooks/useCardQuery";

const props: CardQueryHookProps = {
    cardId: cardQueryVariablesMock.id,
};

describe("useCardQuery()", () => {
    it("should return card successfully", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<CardQueryHookProps, CardQueryHookReturn>({
            props,
            hook: useCardQuery,
            mocks: [cardQuerySuccessMock],
        });

        await waitForNextUpdate();

        expect(result.current.card).toStrictEqual(cardQueryReturnMock.card);
    });

    it("shouldn't return card and return a failure", async () => {
        const { result, waitForNextUpdate } = renderQueryHook<CardQueryHookProps, CardQueryHookReturn>({
            props,
            hook: useCardQuery,
            mocks: [cardQueryFailureMock],
        });

        await waitForNextUpdate();

        expect(result.current.card).toBeUndefined();
    });
});
