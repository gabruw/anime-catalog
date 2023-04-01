import { useSystemSelector } from "@app/storages/system/hooks/system/useSystemSelector";
import { Reducers } from "@app/storages/system/reducers/reducers";

const useImageSelector = () => useSystemSelector((state) => state[Reducers.IMAGE]);

export { useImageSelector };
