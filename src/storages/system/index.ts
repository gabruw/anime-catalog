import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { reduxMiddlewares } from "@app/storages/system/middlewares";

const store = configureStore({
    middleware: reduxMiddlewares,
    reducer: [],
});

const persistor = persistStore(store);

export { store, persistor };
