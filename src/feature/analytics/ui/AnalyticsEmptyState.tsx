export function AnalyticsEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center w-full text-center gap-4 mt-4">
            <div className="w-50 h-50 rounded-full bg-(--color-glass)" />

            <div>
                <div className="text-[16px] font-semibold text-(--color-text)">
                    No expenses yet
                </div>

                <div className="text-[14px] text-(--color-muted)">
                    Add your first expense to see analytics
                </div>
            </div>
        </div>
    );
}
