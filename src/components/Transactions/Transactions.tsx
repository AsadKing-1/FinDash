import { useSelector } from "react-redux";
import { selectTransactions } from "@/feature/transactions/selectors";

import { TransactionsEmptyState } from "@/components/Transactions/TransactionsEmptyState";
import { TransactionsHistory } from "@/components/Transactions/TransactionHistory";

export function Transactions() {

    const t = useSelector(selectTransactions);
    const data = t.length > 0

    return (
        <section id="transaction" className="bg-(--color-card) mt-5 p-5 rounded-md border border-(--color-border)">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[20px] font-bold">History</p>
                    </div>
                    <div>
                        <p className="btn w-25 text-[13px] text-center p-1">Show All</p>
                    </div>
                </div>
                <div className="text-[14px] text-(--color-muted)">
                    Quiсk View
                </div>
            </div>
            <div className="mt-5">
                {data ? <TransactionsHistory/> : <TransactionsEmptyState/>}
            </div>
        </section>
    )
}
