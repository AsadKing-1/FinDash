import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Transactions } from "./pages/Transactions";
import { TransactionsForm } from "./components/Transactions/TransactionsForm/TransactionsForm";


function App() {
  return (
    <AppLayout>
      <Dashboard />
      <Analytics />
      <Transactions />
      <TransactionsForm/>
    </AppLayout>
  );
}

export default App;
