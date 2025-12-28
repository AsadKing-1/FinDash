// feature/transactions/categories.ts
import type { Category} from "@/types/category";

export const CATEGORIES: Category[] = [
  { id: "food", label: "Food", icon: "🍔", type: "expense" },
  { id: "transport", label: "Transport", icon: "🚕", type: "expense" },
  { id: "salary", label: "Salary", icon: "💰", type: "income" },
];
