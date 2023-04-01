import { ImageQuality } from "@app/constants/ImageQuality";
import { Reducers } from "@app/storages/system/reducers/reducers";

export enum ImageActions {
    SET_IMAGE_QUALITY = "setImageQuality",
}

export type SetImageQualityAction = {
    type: `${Reducers.IMAGE}/${ImageActions.SET_IMAGE_QUALITY}`;
    payload: ImageQuality;
};
