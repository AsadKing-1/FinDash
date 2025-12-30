import { useSelector } from "react-redux";
import { selectBalance } from "../../../feature/transactions/selectors";
import { selectSavingsTotal } from "@/feature/savings/selector";
import { selectAvailableBalance } from "../../../feature/available/available";


export const DashboardBalance = () => {
  const balance = useSelector(selectBalance);
  const savings = useSelector(selectSavingsTotal);
  const available = useSelector(selectAvailableBalance);

  return (
    <div className="bg-(--color-card) p-5 rounded-md border border-(--color-border)">
      <div className="flex justify-end">
        <div className="btn w-35 p-0.5 text-[14px] rounded-xl text-center">
          Purple Theme
        </div>
      </div>
      <div>
        <div className="mt-1.5">
          <div className="flex justify-between items-center">
            <div className="text-[12px] text-(--color-muted)">Amount:</div>
            <div className="text-[12px] text-(--color-muted)">
              Expense Forecast
            </div>
          </div>
        </div>
        <div className="text-[22px] text-(--color-text) font-extrabold">
          $ {available}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 md:flex-row-reverse">
        <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)] p-3 rounded-md">
          <div className="text-[14px] text-(--color-muted)">
            Income (Month):
          </div>
          <div className="font-extrabold text-emerald-500 text-[18px]">
            +$ {balance.income}
          </div>
        </div>
        <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)] p-3 rounded-md">
          <div className="text-[14px] text-(--color-muted)">
            Expense (Month):
          </div>
          <div className="font-extrabold text-red-500 text-[18px]">
            -$ {balance.expense}
          </div>
        </div>
        <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.01),transparent)] p-3 rounded-md">
          <div className="text-[14px] text-(--color-muted)">Savings:</div>
          <div className="font-extrabold text-accent-2 text-[18px]">
            ${savings}
          </div>
        </div>
      </div>
    </div>
  );
};
