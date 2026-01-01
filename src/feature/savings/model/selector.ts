/**
 * Селекторы для получения данных о сбережениях
 */

import { selectTransactions } from "@/feature/transactions/model/selectors";
import { createSelector } from "@reduxjs/toolkit";
import type { Transaction } from "../../transactions/model/types";

export const selectSavingsTotal = createSelector(
  [selectTransactions],
  // Учитываем только транзакции типа "savings" для расчёта общей суммы сбережений
  (transactions: Transaction[]) => {
    return transactions
      .filter((t) => t.category.type === "savings")
      .reduce((acc, t) => acc + t.amount, 0);
  }
);
