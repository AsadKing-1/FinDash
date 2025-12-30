import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/selector";
import { getCategoryColor } from "@/feature/analytics/colors";

export function AnalyticsTable() {
    const data = useSelector(selectAnalytics);

    return (
        <div className="flex flex-col gap-2.5 w-full mt-2">
            {data.map((row) => (
                <div
                    key={row.label}
                    className="
                    w-full
                        flex items-center justify-between
                        p-3
                        bg-(--color-bg)
                        rounded-lg
                        transition-colors
                        hover:bg-(--color-glass)
                    "
                >
                    <div className="flex items-center gap-3">
                        <span
                            className="w-3.5 h-3.5 rounded-full"
                            style={{
                                backgroundColor: getCategoryColor(row.label),
                            }}
                        />

                        <div className="flex flex-col leading-tight">
                            <span className="text-[15px] font-medium text-(--color-text)">
                                {row.label}
                            </span>
                            <span className="text-[12px] text-(--color-muted)">
                                {row.percent}%
                            </span>
                        </div>
                    </div>

                    <span className="text-[14px] font-semibold text-(--color-text)">
                        $ {row.amount.toLocaleString("ru-RU")}
                    </span>
                </div>
            ))}
        </div>
    );
}
