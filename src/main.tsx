import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app/App";

createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </StrictMode>
);
