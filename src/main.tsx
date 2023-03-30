import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app/App";
import { ScreenLoader } from "@app/components/ScreenLoader";

import "@app/global/styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<ScreenLoader />}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>
);
