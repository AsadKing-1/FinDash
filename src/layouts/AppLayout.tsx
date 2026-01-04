import { AddSearchModal } from "@feature/transactions/ui/SearchModal/AddSearchModal"
import { AddTransactionModal } from "@/feature/transactions/ui/TransactionsForm/AddTransactionModal";

export function AppLayout({
    children,
    openSearchModal,
    setSearchModalOpen,
    openTransactionModal,
    setTransactionModalOpen,
  }: {
    children: React.ReactNode;
    openSearchModal: boolean;
    setSearchModalOpen: (open: boolean) => void;
    openTransactionModal: boolean;
    setTransactionModalOpen: (open: boolean) => void;
  }) {

    return (
        <div className="h-full bg-(--color-bg) text-(--color-text) overflow-hidden">
            <div className="max-w-8xl mx-auto p-4 flex flex-col gap-6">
                {children}
            </div>
            <AddSearchModal open={openSearchModal} onClose={() => setSearchModalOpen(false)}/>
           <AddTransactionModal open={openTransactionModal} onClose={() => setTransactionModalOpen(false)}/>
        </div>
    )
}
