import { createImageLink } from "@app/functions/createImageLink";
import { useImageSelector } from "@app/storages/system/hooks/image/useImageSelector";

export type ImageLinkHookReturn = {
    getImageLink: (source?: string | null, fallback?: string) => string | undefined;
};

const useImageLink = (): ImageLinkHookReturn => {
    const { quality } = useImageSelector();

    const getImageLink = (source?: string | null, fallback?: string): string | undefined => {
        return source ? createImageLink(source || "", quality) : fallback;
    };

    return {
        getImageLink,
    };
};

export { useImageLink };
