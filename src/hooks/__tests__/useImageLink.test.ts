import { renderReduxHook } from "@app/__fixtures__/functions/renderHook/renderReduxHook";
import { ImageQuality } from "@app/constants/ImageQuality";
import { ImageLinkHookReturn, useImageLink } from "@app/hooks/useImageLink";
import { FALLBACK_IMAGE } from "@app/modules/cards/pages/cards/components/PokemonCardList/components/PokemonListCard";

const imageWithoutQuality = "https://assets.tcgdex.net/en/base/base3/1";

describe("useImageLink()", () => {
    it("should return an image url with quality when image isn't undefined", () => {
        const expectImage = `${imageWithoutQuality}/${ImageQuality.HIGH}.png`;

        const {
            result: {
                current: { getImageLink },
            },
        } = renderReduxHook<void, ImageLinkHookReturn>({
            hook: useImageLink,
        });

        const image = getImageLink(imageWithoutQuality, FALLBACK_IMAGE);
        expect(image).toBe(expectImage);
    });

    it("should return the fallback when image is undefined", () => {
        const {
            result: {
                current: { getImageLink },
            },
        } = renderReduxHook<void, ImageLinkHookReturn>({
            hook: useImageLink,
        });

        const image = getImageLink(undefined, FALLBACK_IMAGE);
        expect(image).toBe(FALLBACK_IMAGE);
    });
});
