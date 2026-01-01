import { AppLayout } from "@layouts/AppLayout";
import { Dashboard } from "@layouts/Dashboard/Dashboard";
import { Analytics } from "@feature/analytics/ui/Analytics";
import { Transactions } from "@feature/transactions/ui/Transactions";
import { Advice } from "@feature/advice/ui/Advice";


function App() {
  return (
    <AppLayout>
      <Advice />
      <Dashboard />
      <Analytics />
      <Transactions />
    </AppLayout>
  );
}

export default App;
