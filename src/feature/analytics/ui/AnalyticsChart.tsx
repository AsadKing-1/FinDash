import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { selectAnalytics } from "@/feature/analytics/model/selector";
import { getCategoryColor } from "@/feature/analytics/model/colors";

export function AnalyticsDonut() {
    const data = useSelector(selectAnalytics);

    const total = data.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="relative w-full h-45 shrink-0">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="label"
                        innerRadius={58}
                        outerRadius={78}
                        startAngle={90}
                        endAngle={-270}
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth={2}
                    >
                        {data.map((row) => (
                            <Cell
                                key={row.label}
                                fill={getCategoryColor(row.label)}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[18px] font-bold text-(--color-text)">
                    $ {total.toLocaleString("ru-RU")}
                </span>
                <span className="text-[11px] tracking-wide text-(--color-muted)">
                    TOTAL
                </span>
            </div>
        </div>
    );
}
