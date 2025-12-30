export function TransactionsEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-(--color-glass) text-2xl">
                🧾
            </div>

            <div className="text-sm font-semibold text-(--color-text)">
                No transactions yet
            </div>

            <div className="text-xs text-(--color-muted)">
                Add your first transaction to see history
            </div>
        </div>
    );
}
