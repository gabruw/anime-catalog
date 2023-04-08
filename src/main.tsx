import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "@app/App";
import { ScreenLoader } from "@app/components/ScreenLoader";
import { persistor, store } from "@app/storages/system";

import "@app/styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<ScreenLoader />}>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor} loading={<ScreenLoader />}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </ReduxProvider>
        </Suspense>
    </StrictMode>
);
