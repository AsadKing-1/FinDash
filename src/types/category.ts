export type CategoryType = "income" | "expense" | "savings";

export interface Category {
    id: string;
    label: string;
    type: CategoryType;
    color?: string;
    icon?: string;
}
