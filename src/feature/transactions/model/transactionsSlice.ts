import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Transaction } from "../model/types";

interface TransactionsState {
    items: Transaction[],
}

const initialState: TransactionsState = {
    items: []
};


const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction(state, action: PayloadAction<Transaction>) {
            state.items.push(action.payload);
        },
        removeTransaction(state, action: PayloadAction<string>) {
            state.items = state.items.filter(t => t.id !== action.payload);
        },
    },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;