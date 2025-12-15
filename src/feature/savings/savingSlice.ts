import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SavingsState {
    total: number;
}

const initialState: SavingsState = {
    total: 0,
}

const savingsSlice = createSlice({
    name: "savings",
    initialState,
    reducers: {
        addSavings(state, action:PayloadAction<number>){
            state.total += action.payload;
        }
    }
});

export const { addSavings } = savingsSlice.actions;
export default savingsSlice.reducer;