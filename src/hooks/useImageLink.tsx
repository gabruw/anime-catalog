import { createImageLink } from "@app/functions/createImageLink";
import { useImageSelector } from "@app/storages/system/hooks/image/useImageSelector";

export type ImageLinkHookReturn = {
    getImageLink: (source?: string) => string;
};

const useImageLink = (): ImageLinkHookReturn => {
    const { quality } = useImageSelector();

    const getImageLink = (source?: string) => createImageLink(source || "", quality);

    return {
        getImageLink,
    };
};

export { useImageLink };
