import { selectTransactions } from "../transactions/selectors";
import { createSelector } from "@reduxjs/toolkit";
import type { Transaction } from "../../types/transaction";

export const selectSavingsTotal = createSelector(
  [selectTransactions],
  (transactions: Transaction[]) => {
   return transactions.filter(t => t.category.type === "savings").reduce((acc, t) => acc + t.amount, 0);
  }
  
);
