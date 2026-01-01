import type { Currency } from "@/types/currency";
import type { Category } from "@/types/category";

export interface Transaction {
    id: string;
    amount: number; 
    currency: Currency;
    category: Category;
    date: string;             
    note: string;
    createdAt: number;        
}
