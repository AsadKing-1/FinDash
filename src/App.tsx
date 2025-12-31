import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Analytics } from "./components/Analytics/Analytics";
import { Transactions } from "./components/Transactions/Transactions";
import { Advice } from "./components/Advice/Advice";


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
