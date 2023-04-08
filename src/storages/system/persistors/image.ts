import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { imageReducer } from "@app/storages/system/reducers/image";
import { ImageReducerState } from "@app/storages/system/reducers/image/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const imagePersistedReducer = persistReducer<ImageReducerState, Action<ImageReducerState>>(
    {
        key: Reducers.IMAGE,
        storage,
    },
    imageReducer.reducer
);

export { imagePersistedReducer };
