import { useSelector } from "react-redux";
import { selectLastTransactions } from "@feature/transactions/model/selectors";
import { CATEGORIES } from "@feature/transactions/model/categories";


export function TransactionsHistory() {
  const t = useSelector(selectLastTransactions);

  return (
    <div className="flex flex-col gap-2">
      {t.map((transaction) => {
        const category = CATEGORIES.find(
          (c) =>
            c.label === transaction.category?.label || c.id === transaction.category?.id
        );

        return (
          <div key={transaction.id ?? `${transaction.date}-${transaction.amount}`} className="group flex items-center justify-between p-4 rounded-xl bg-(--color-card) border border-(--color-border) transition-all hover:translate-y-px hover:shadow-[0_0_0_1px_rgba(138,43,226,0.3)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                {category?.icon}
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-(--color-text)">
                  {transaction.category?.label}
                </span>
                <span className="text-xs text-(--color-muted)">
                  {transaction.date}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className={`text-sm font-medium ${transaction.category?.type === "income" ? "text-success" : "text-danger"}`}>
                {transaction.category?.type === "income" ? "+" : "-"} $ {transaction.amount}
              </span>
              <span className="text-[11px] text-(--color-muted)">{category?.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
