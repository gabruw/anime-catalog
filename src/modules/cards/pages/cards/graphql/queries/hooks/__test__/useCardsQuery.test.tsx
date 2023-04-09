import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { renderHook } from "@testing-library/react-hooks";

import { RenderHookWrapper } from "@app/__fixtures__/types/RenderHookWrapper";
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
import { PaginationContextProvider } from "@app/storages/pagination";

const setup = (props: CardsQueryHookProps, mocks: MockedResponse[]) =>
    renderHook<CardsQueryHookProps, CardsQueryHookReturn>(useCardsQuery, {
        initialProps: props,
        wrapper: ({ children }: RenderHookWrapper) => (
            <MockedProvider addTypename={false} mocks={mocks}>
                <PaginationContextProvider>{children}</PaginationContextProvider>
            </MockedProvider>
        ),
    });

describe("useCardsQuery()", () => {
    it("should return paginated cards successfully", async () => {
        const props: CardsQueryHookProps = cardsQueryVariablesPaginationMock.filters;

        const { result, waitForNextUpdate } = setup(props, [cardsQuerySuccessPaginationMock]);

        await waitForNextUpdate();

        expect(result.current.cards).toStrictEqual(cardsQueryReturnPaginationMock.cards);
    });

    it("should return filtered cards by name successfully", async () => {
        const props: CardsQueryHookProps = cardsQueryVariablesFilterMock.filters;

        const { result, waitForNextUpdate } = setup(props, [cardsQuerySuccessFilterMock]);

        await waitForNextUpdate();

        expect(result.current.cards).toStrictEqual(cardsQueryReturnFilterMock.cards);
    });

    it("shouldn't return cards and return a failure", async () => {
        const { result, waitForNextUpdate } = setup(undefined, [cardsQueryFailureMock]);

        await waitForNextUpdate();

        expect(result.current.cards).toBeUndefined();
    });
});
