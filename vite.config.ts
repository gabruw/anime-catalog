import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

export default defineConfig({
    plugins: [react(), manualChunksPlugin()],
    resolve: {
        alias: [{ find: "@app", replacement: "/src" }],
    },
});
