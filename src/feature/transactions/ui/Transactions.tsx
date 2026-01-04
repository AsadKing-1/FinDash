import { useSelector } from "react-redux";
import { Button } from "@/ui/button";
import { selectTransactions } from "@feature/transactions/model/selectors";
import { TransactionsEmptyState } from "@feature/transactions/ui/TransactionsEmptyState";
import { TransactionsHistory } from "@feature/transactions/ui/TransactionHistory";

export function Transactions({ openModalFN }: { openModalFN: (open: boolean) => void }) {
    const t = useSelector(selectTransactions);
    const data = t.length > 0

    return (
        <section id="transaction" className="bg-(--color-card) w-full p-5 rounded-md border border-(--color-border) mt-5 md:mt-0 sm:h-full sm:mt-0">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[20px] font-bold">History</p>
                    </div>
                    <div>
                        <p onClick={() => openModalFN(true)} className="btn w-25 text-[13px] text-center p-1">Show All</p>
                    </div>
                </div>
                <div className="text-[14px] text-(--color-muted)">
                    Quiсk View
                </div>
            </div>
            <div className="mt-5">
                {data ? <TransactionsHistory /> : <TransactionsEmptyState />}
            </div>
            <Button onClick={() => openModalFN(true)} className="btn w-full mt-3 text-[16px]">Show All</Button>
        </section>
    )
}
