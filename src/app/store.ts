/**
 * Конфигурация  Redux toolkit store
 *
 *
 * - обьединяет все редьюсеры
 * - сохраняеет состояние в localStorage (ключ: "finDash")
 *
 * Реалицазия сделана вручную
 * что бы не подключать дополнительные библиотеки
 */

import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../feature/transactions/model/transactionsSlice";
import savingSliceReducer from "../feature/savings/model/savingSlice";

const rootReducer = {
  transactions: transactionsReducer,
  savings: savingSliceReducer,
};

export type RootState = {
  transactions: ReturnType<typeof transactionsReducer>;
  savings: ReturnType<typeof savingSliceReducer>;
};

/**
 * Загружает состояние Redux из localStorage
 *
 * Возвращает undefined, если:
 * - состояние отсутствует
 * - данные повреждены
 */
const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("finDash");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  localStorage.setItem("finDash", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
