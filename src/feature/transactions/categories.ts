import type { Category } from "@/types/category";

export const CATEGORIES: Category[] = [
  /* ===================== EXPENSES ===================== */
  { id: "food", label: "Food", type: "expense" },
  { id: "transport", label: "Transport", type: "expense" },
  { id: "rent", label: "Rent", type: "expense" },
  { id: "utilities", label: "Utilities", type: "expense" },
  { id: "internet", label: "Internet & Mobile", type: "expense" },
  { id: "shopping", label: "Shopping", type: "expense" },
  { id: "clothes", label: "Clothes", type: "expense" },
  { id: "health", label: "Health", type: "expense" },
  { id: "education", label: "Education", type: "expense" },
  { id: "entertainment", label: "Entertainment", type: "expense" },
  { id: "subscriptions", label: "Subscriptions", type: "expense" },
  { id: "travel", label: "Travel", type: "expense" },
  { id: "other-expense", label: "Other expense", type: "expense" },

  /* ===================== INCOME ===================== */
  { id: "salary", label: "Salary", type: "income" },
  { id: "freelance", label: "Freelance", type: "income" },
  { id: "business", label: "Business", type: "income" },
  { id: "bonus", label: "Bonus", type: "income" },
  { id: "investment", label: "Investments", type: "income" },
  { id: "gift-income", label: "Gift", type: "income" },
  { id: "refund", label: "Refund", type: "income" },
  { id: "other-income", label: "Other income", type: "income" },

  /* ===================== SAVINGS ===================== */
  { id: "savings-transfer", label: "Savings transfer", type: "savings" },
  { id: "emergency-fund", label: "Emergency fund", type: "savings" },
  { id: "long-term", label: "Long-term savings", type: "savings" },
  { id: "investment-savings", label: "Investment savings", type: "savings" },
  { id: "other-savings", label: "Other savings", type: "savings" },
];
