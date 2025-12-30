import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Analytics } from "./components/Analytics/Analytics";
import { Transactions } from "./components/Transactions/Transactions";


function App() {
  return (
    <AppLayout>
      <Dashboard />
      <Analytics />
      <Transactions />
    </AppLayout>
  );
}

export default App;
