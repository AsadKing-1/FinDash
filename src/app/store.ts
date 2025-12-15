import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from "../feature/transactions/transactionsSlices";
import savingSliceReducer from "../feature/savings/savingSlice";

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        savings: savingSliceReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch