import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ImageQuality } from "@app/constants/ImageQuality";
import { ImageActions } from "@app/storages/system/reducers/image/actions";
import { ImageReducerState } from "@app/storages/system/reducers/image/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const initialState: ImageReducerState = {
    quality: ImageQuality.HIGH,
};

const imageReducer = createSlice({
    name: Reducers.IMAGE,
    initialState,
    reducers: {
        [ImageActions.SET_IMAGE_QUALITY]: (state: ImageReducerState, action: PayloadAction<ImageQuality>) => ({
            ...state,
            quality: action.payload,
        }),
    },
});

export { imageReducer };
