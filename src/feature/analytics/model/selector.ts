import { createSelector } from "@reduxjs/toolkit";
import { selectTransactions } from "@/feature/transactions/model/selectors";

export const selectAnalytics = createSelector(
    [selectTransactions],
    (transactions) => {
        const source = transactions;
        const grouped: Record<string, number> = {};

        for (const t of source) {
            if (t.category.type !== "expense") continue;

            const label = t.category.label;
            grouped[label] = (grouped[label] ?? 0) + t.amount;
        }

        const total = Object.values(grouped).reduce(
            (sum, v) => sum + v,
            0
        );

        return Object.entries(grouped).map(([label, amount]) => ({
            label,
            amount,
            percent: total === 0 ? 0 : Math.round((amount / total) * 100),
        }));
    }
);
