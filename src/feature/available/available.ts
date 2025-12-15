import { createSelector } from "@reduxjs/toolkit";
import { selectBalance } from "../transactions/selectors";
import { selectSavings } from "../savings/selector";

export const selectAvailableBalance = createSelector(
    [selectBalance, selectSavings],
    (balance, savings) => balance.total - savings
);
