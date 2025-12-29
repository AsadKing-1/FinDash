import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Transactions } from "./pages/Transactions";

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
