import type { RootState } from "@/app/store";

export function buildFinanceContext(state: RootState) {
  const { transactions, savings } = state;

  let income = 0;
  let expense = 0;
  const byCategory: Record<string, number> = {};

  for (const t of transactions.items) {
    if (t.category.type === "income") income += t.amount;
    if (t.category.type === "expense") {
      expense += t.amount;
      byCategory[t.category.label] =
        (byCategory[t.category.label] || 0) + t.amount;
    }
  }

  const topCategory = Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0];

  return `
Balance: ${income - expense}
Income: ${income}
Expenses: ${expense}
Savings: ${savings.total}
Top expense category: ${
    topCategory ? `${topCategory[0]} (${topCategory[1]})` : "None"
  }
`;
}
