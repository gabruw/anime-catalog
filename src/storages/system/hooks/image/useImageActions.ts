import { ImageQuality } from "@app/constants/ImageQuality";
import { useSystemDispatch } from "@app/storages/system/hooks/system/useSystemDispatch";
import { imageReducer } from "@app/storages/system/reducers/image";
import { SetImageQualityAction } from "@app/storages/system/reducers/image/actions";

type ImageActions = {
    setImageQualityDispatch: (payload: ImageQuality) => SetImageQualityAction;
};

const useImageActions = (): ImageActions => {
    const dispatch = useSystemDispatch();

    const { setImageQuality } = imageReducer.actions;

    const setImageQualityDispatch = (payload: ImageQuality): SetImageQualityAction =>
        dispatch(setImageQuality(payload));

    return {
        setImageQualityDispatch,
    };
};

export { useImageActions };
