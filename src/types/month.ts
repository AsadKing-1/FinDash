import type { Transaction } from "@feature/transactions/model/types";

export interface Month {
    id: string;
    label: string;
    transactions: Transaction[];
}
