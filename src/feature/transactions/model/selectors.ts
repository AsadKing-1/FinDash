import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export const selectTransactions = (state: RootState) => state.transactions.items;

export const selectBalance = createSelector(
    [selectTransactions],
    (transactions) => {
        let income = 0;
        let expense = 0;

        for (const t of transactions) {
            if (t.category.type === "income") income += t.amount;
            else expense += t.amount;
        }

        return {
            total: income - expense,
            income,
            expense,
        };
    }
);

export const selectMonthPercent = createSelector(
    [selectBalance],
    ({ income, expense }) => {
        if (income === 0) return 0;
        return ((income - expense) / income) * 100;
    }
);

