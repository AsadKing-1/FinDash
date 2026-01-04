import { useState } from "react";

import { selectTransactionsSearch } from "../../model/searchSelector";
import { useAppSelector } from "@/app/store";

import { formatDate } from "@/shared/formatDate";

import { Input } from "@/ui/input";

export function SearchModal() {

    const [query, setQuery] = useState<string>("");

    const results = useAppSelector((state) => selectTransactionsSearch(state, query,));

    return (
        <div className="bg-(--color-card) border border-(--color-border) rounded-md p-2">
            <div className="flex relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 absolute left-4.5 top-4.5 text-(--color-muted)">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <Input onChange={(e) => setQuery(e.target.value)} value={query} className="p-5 w-full pl-10 border border-(--color-border)" placeholder="Search transactions..." />
            </div>
            <div className=" p-3 rounded-xl flex flex-col gap-2">
                {results.map((t) => (
                    <div className="flex border-(--color-border) items-center gap-3 p-3 rounded-xl bg-(--color-bg) border border-(--color-border)hover:border-(--color-accent) transition-colors">
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-(--color-accent) text-white text-lg shrink-0">
                            {t.category.icon ?? "🚕"}
                        </div>

                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                            <span className="text-sm font-medium truncate">
                                {t.note || "Transaction"}
                            </span>

                            <span className="text-xs text-(--color-muted) truncate">
                                {t.category.label}
                            </span>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col items-end shrink-0 gap-1">
                            <span
                                className={`text-sm font-semibold ${t.category.type === "income"
                                    ? "text-(--color-success)"
                                    : "text-(--color-danger)"
                                    }`}
                            >
                                {t.category.type === "income" ? "+$" : "-$"}
                                {t.amount}
                            </span>

                            <span className="text-xs text-(--color-muted)">
                                {formatDate(t.date)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}