import { HttpLink } from "@apollo/client";
import { fetch } from "cross-fetch";

export const link = new HttpLink({ uri: import.meta.env.VITE_API_BASE, fetch });
