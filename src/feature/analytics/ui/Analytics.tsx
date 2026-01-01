import { AnalyticsDonut } from "@/feature/analytics/ui/AnalyticsChart";
import { AnalyticsEmptyState } from "@/feature/analytics/ui/AnalyticsEmptyState";
import { AnalyticsTable } from "@/feature/analytics/ui/AnalyticsTable";
import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/model/selector";

export function Analytics() {
  const data = useSelector(selectAnalytics);
  const hasData = data.length > 0;

  return (
    <section
      className="
            bg-(--color-card)
            mt-5
            p-6
            rounded-2xl
            border border-(--color-border)
        "
    >
      <header className="mb-5">
        <p className="text-[20px] font-semibold text-(--color-text)">
          Cost Allocation
        </p>
        <p className="text-[13px] text-(--color-muted)">
          Categories for the current month
        </p>
      </header>

      <div className="flex flex-col">
        {hasData ? <AnalyticsDonut /> : <AnalyticsEmptyState />}
        {hasData && <AnalyticsTable />}
      </div>
    </section>
  );
}
