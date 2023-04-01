import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { reduxMiddlewares } from "@app/storages/system/middlewares";
import { imagePersistedReducer } from "@app/storages/system/persistors/image";
import { Reducers } from "@app/storages/system/reducers/reducers";

const store = configureStore({
    middleware: reduxMiddlewares,
    reducer: {
        [Reducers.IMAGE]: imagePersistedReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };
