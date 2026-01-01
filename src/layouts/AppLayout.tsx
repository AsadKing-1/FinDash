import Header from "@/layouts/Header/Header";
import { AddTransactionModal } from "@/feature/transactions/ui/TransactionsForm/AddTransactionModal";


import { useState } from "react";

export function AppLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-(--color-bg) text-(--color-text) overflow-hidden">
            <div className="max-w-8xl mx-auto p-4 flex flex-col gap-6">
                <Header openModalFN={setOpen}/>
                <main>{children}</main>
            </div>
           
           <AddTransactionModal open={open} onClose={() => setOpen(false)}/>
        </div>
    )
}
