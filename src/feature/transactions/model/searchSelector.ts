import { createSelector } from "@reduxjs/toolkit";
import { selectTransactions } from "./selectors";
import type { RootState } from "@/app/store";

export const selectTransactionsSearch = createSelector(
  [
    selectTransactions, 
    (_: RootState, query: string) => query.toLowerCase(),
  ],
  (transactions, query) => {
    if (!query) return transactions;
    return transactions.filter(
      (t) => t.note.toLowerCase().includes(query) || t.category.label.toLowerCase().includes(query)
    );
  }
);