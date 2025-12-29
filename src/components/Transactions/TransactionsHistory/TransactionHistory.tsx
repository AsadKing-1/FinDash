import { useSelector } from "react-redux";
import { selectTransactions } from "@/feature/transactions/selectors";

const CATEGORIES = [
  { label: "Food", icon: "🍔", type: "expense" },
  { label: "Transport", icon: "🚕", type: "expense" },
  { label: "Shopping", icon: "🛍️", type: "expense" },
  { label: "Games", icon: "🎮", type: "expense" },
  { label: "Rent", icon: "🏠", type: "expense" },
  { label: "Health", icon: "💊", type: "expense" },
  { label: "Education", icon: "📚", type: "expense" },
  { label: "Subscriptions", icon: "💳", type: "expense" },
  { label: "Salary", icon: "💰", type: "income" },
  { label: "Bonus", icon: "🎁", type: "income" },
  { label: "Savings", icon: "🏦", type: "savings" },
];

export function TransactionsHistory() {
  const t = useSelector(selectTransactions);

  return (
    <div className="flex flex-col gap-2">
      {t.map((transaction) => {
        const category = CATEGORIES.find(
          (c) => c.label === transaction.category.label
        );

        return (
          <div
            key={transaction.id}
            className="bg-(--color-bg) p-4 rounded-md flex justify-between items-center transition-colors hover:bg-(--color-glass)"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-accent text-xl">
                {category?.icon ?? "💳"}
              </div>

              <div className="flex flex-col">
                <span className="text-[18px] text-white">
                  {transaction.category.label}
                </span>
                <span className="text-xs text-(--color-muted)">
                  {transaction.date}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span
                className={`font-bold ${
                  transaction.category.type === "expense"
                    ? "text-red-500"
                    : "text-emerald-500"
                }`}
              >
                {transaction.category.type === "expense" ? "-" : "+"}$
                {transaction.amount.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
