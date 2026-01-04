import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CATEGORIES } from "@feature/transactions/model/categories";
import { addTransaction } from "@/feature/transactions/model/transactionsSlice";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

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
} from "@ui/form";
import { Input } from "@ui/input";
import { Button } from "@ui/button";

export function TransactionsForm({ onClose }: { onClose: () => void }) {
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
    onClose();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-(--color-card) border border-(--color-border) p-5 rounded-xl flex flex-col gap-4"
      >
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold">FinDash</p>
          <Button onClick={() => onClose()} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <div className="flex gap-2">
              {["expense", "income", "savings"].map((t) => (
                <Button
                  key={t}
                  type="button"
                  onClick={() => field.onChange(t)}
                  className={`flex-1 border min-w-10 w-auto border-(--color-border) ${
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
                <div className="flex justify-between items-center gap-2">
                  <p className="font-bold text-[20px] md:text-[25px]">$</p>
                  <Input
                    type="number"
                    value={field.value === 0 ? "" : field.value}
                    onChange={(e) => {
                      const v = e.target.value;
                      field.onChange(v === "" ? 0 : Number(v));
                    }}
                    className="border-l-0 text-[30px] md:text-[25px] font-bold border-r-0 border-t-0 border-b-2 py-6 border-(--color-border) focus:border-b-accent-2 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none active:outline-none"
                    placeholder="0"
                  />
                </div>
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

              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full border border-(--color-border)">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent className="bg-(--color-card) border border-(--color-border) w-full">
                  {CATEGORIES.filter((c) => c.type === form.watch("type")).map(
                    (category) => (
                      <SelectItem key={category.id} value={category.label}>
                        {category.label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Input
                  className="border border-(--color-border)"
                  type="text"
                  onChange={(e) => field.onChange(e.target.value)}
                  value={field.value}
                  placeholder="Description"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  onChange={(e) => field.onChange(e.target.value)}
                  value={field.value}
                  className="border border-(--color-border)"
                />
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
