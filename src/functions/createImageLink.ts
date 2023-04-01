import { ImageQuality } from "@app/constants/ImageQuality";

export const createImageLink = (source: string, quality: ImageQuality) => `${source}/${quality}.png`;
