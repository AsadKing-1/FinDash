import { createSelector } from "@reduxjs/toolkit";
import { selectBalance } from "../transactions/selectors";
import { selectSavingsTotal } from "../savings/selector";

export const selectAvailableBalance = createSelector(
    [selectBalance, selectSavingsTotal],
    (balance, savings) => balance.total - savings
);
