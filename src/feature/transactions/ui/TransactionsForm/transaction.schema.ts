import { z } from "zod";

export const transactionSchema = z.object({
  type: z.enum(["income", "expense", "savings"]),
  amount: z.number().positive(),
  category: z.string().min(1),
  date: z.string(),
  note: z.string().optional(),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
