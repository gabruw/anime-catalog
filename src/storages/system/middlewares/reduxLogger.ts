import { Middleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

let reduxLogger: Middleware | undefined;

if (!import.meta.env.PROD) {
    const logger = createLogger({
        level: "info",
    });

    reduxLogger = logger;
}

export { reduxLogger };
