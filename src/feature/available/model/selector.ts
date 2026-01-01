import { createSelector } from "@reduxjs/toolkit";
import { selectBalance } from "../../transactions/model/selectors";
import { selectSavingsTotal } from "../../savings/model/selector";

export const selectAvailableBalance = createSelector(
    [selectBalance, selectSavingsTotal],
    (balance, savings) => balance.total - savings
);
