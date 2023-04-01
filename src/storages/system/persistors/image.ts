import { Action } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";
import { persistReducer } from "redux-persist";

import { imageReducer } from "@app/storages/system/reducers/image";
import { ImageReducerState } from "@app/storages/system/reducers/image/types";
import { Reducers } from "@app/storages/system/reducers/reducers";

const imagePersistedReducer = persistReducer<ImageReducerState, Action<ImageReducerState>>(
    {
        key: Reducers.IMAGE,
        storage: secureLocalStorage,
    },
    imageReducer.reducer
);

export { imagePersistedReducer };
