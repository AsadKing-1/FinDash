import { useSelector } from "react-redux";
import { selectBalance } from "@/feature/transactions/selectors";
import { selectSavings } from "@/feature/savings/selector";
import { selectAvailableBalance } from "@/feature/available/available";

export function useDashboardBalance() {
    return {
        balance: useSelector(selectBalance),
        savings: useSelector(selectSavings),
        available: useSelector(selectAvailableBalance),
    };
}
