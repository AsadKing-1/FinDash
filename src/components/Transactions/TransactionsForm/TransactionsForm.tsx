import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CATEGORIES } from "@/feature/transactions/categories";
import { addTransaction } from "@/feature/transactions/transactionsSlices";

import {
  transactionSchema,
  type TransactionFormValues,
} from "./transaction.schema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export function TransactionsForm() {
  const dispatch = useDispatch();

  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "expense",
      amount: 0,
      category: "",
      date: new Date().toISOString().slice(0, 10),
      note: "",
    },
  });

  function onSubmit(values: TransactionFormValues) {
    const category = CATEGORIES.find(
      (c) => c.label === values.category && c.type === values.type
    );

    if (!category) return;

    dispatch(
      addTransaction({
        id: crypto.randomUUID(),
        note: values.note ?? "",
        amount: values.amount,
        category,
        currency: "USD",
        date: values.date,
        createdAt: Number(new Date().toISOString()),
      })
    );

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-(--color-card) border border-(--color-border) p-5 rounded-xl flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <div className="flex gap-2">
              {["Expense", "Income", "Savings"].map((t) => (
                <Button
                  key={t}
                  type="button"
                  onClick={() => field.onChange(t)}
                  className={`flex-1 border border-(--color-border) ${
                    field.value === t
                      ? "bg-accent border-accent-2"
                      : "border-(--color-border)"
                  }`}
                >
                  {t}
                </Button>
              ))}
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={field.value === 0 ? "" : field.value}
                  onChange={(e) => {
                    const v = e.target.value;
                    field.onChange(v === "" ? 0 : Number(v));
                  }}
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none active:outline-none"
                  placeholder="0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <select
                  className="w-full rounded-md border border-(--color-border) bg-(--color-bg) p-3"
                  {...field}
                >
                  <option value="">Select category</option>
                  {CATEGORIES.filter((c) => c.type === form.watch("type")).map(
                    (c) => (
                      <option key={c.id} value={c.label}>
                        {c.label}
                      </option>
                    )
                  )}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-2 btn font-bold">
          Add transaction
        </Button>
      </form>
    </Form>
  );
}
