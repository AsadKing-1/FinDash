import type { RootState } from "@/app/store";

export const selectSavings = (state: RootState) => state.savings.total;
