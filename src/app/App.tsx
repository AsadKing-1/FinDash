import { AppLayout } from "@layouts/AppLayout";
import { Dashboard } from "@layouts/Dashboard/Dashboard";
import { Analytics } from "@feature/analytics/ui/Analytics";
import { Transactions } from "@feature/transactions/ui/Transactions";
import { Advice } from "@feature/advice/ui/Advice";
import { useState } from "react";
import Header from "@/layouts/Header/Header";


function App() {
  const [openTransactionModal, setTransactionModalOpen] = useState<boolean>(false);
  const [openSearchModal, setSearchModalOpen] = useState<boolean>(false);

  return (
    <AppLayout
      openTransactionModal={openTransactionModal}
      setTransactionModalOpen={setTransactionModalOpen}
      openSearchModal={openSearchModal}
      setSearchModalOpen={setSearchModalOpen}
    >
      <Header openModalFN={setTransactionModalOpen} />
      <div className="md:hidden">
        <Advice />
      </div>
      <Dashboard />
      <div className="sm:flex sm:gap-3">
        <div className="sm:w-[50%]">
          <Analytics />
        </div>
        <div className="sm:w-[50%] sm:flex sm:flex-col sm:gap-3">
          <div className="hidden md:block">
            <Advice />
          </div>
          <div className="sm:h-full">
            <Transactions openModalFN={setSearchModalOpen} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
