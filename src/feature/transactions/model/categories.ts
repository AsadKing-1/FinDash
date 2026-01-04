import type { Category } from "@/types/category";

export const CATEGORIES: (Category & { icon: string })[] = [
  /* ===================== EXPENSES ===================== */
  { id: "food", label: "Food", type: "expense", icon: "🍔" },
  { id: "transport", label: "Transport", type: "expense", icon: "🚕" },
  { id: "rent", label: "Rent", type: "expense", icon: "🏠" },
  { id: "utilities", label: "Utilities", type: "expense", icon: "💡" },
  { id: "internet", label: "Internet", type: "expense", icon: "📶" },
  { id: "shopping", label: "Shopping", type: "expense", icon: "🛍️" },
  { id: "clothes", label: "Clothes", type: "expense", icon: "👕" },
  { id: "health", label: "Health", type: "expense", icon: "💊" },
  { id: "education", label: "Education", type: "expense", icon: "📚" },
  { id: "entertainment", label: "Entertainment", type: "expense", icon: "🎮" },
  { id: "subscriptions", label: "Subscriptions", type: "expense", icon: "💳" },
  { id: "travel", label: "Travel", type: "expense", icon: "✈️" },
  { id: "other-expense", label: "Other expense", type: "expense", icon: "📦" },

  /* ===================== INCOME ===================== */
  { id: "salary", label: "Salary", type: "income", icon: "💰" },
  { id: "freelance", label: "Freelance", type: "income", icon: "💻" },
  { id: "business", label: "Business", type: "income", icon: "🏢" },
  { id: "bonus", label: "Bonus", type: "income", icon: "🎁" },
  { id: "investment", label: "Investments", type: "income", icon: "📈" },
  { id: "gift-income", label: "Gift", type: "income", icon: "🎉" },
  { id: "refund", label: "Refund", type: "income", icon: "🔁" },
  { id: "other-income", label: "Other income", type: "income", icon: "💵" },

  /* ===================== SAVINGS ===================== */
  {
    id: "savings-transfer",
    label: "Savings transfer",
    type: "savings",
    icon: "🏦",
  },
  {
    id: "emergency-fund",
    label: "Emergency fund",
    type: "savings",
    icon: "🛡️",
  },
  { id: "long-term", label: "Long savings", type: "savings", icon: "⏳" },
  {
    id: "investment-savings",
    label: "Investment savings",
    type: "savings",
    icon: "📊",
  },
  { id: "other-savings", label: "Other savings", type: "savings", icon: "💎" },
];
