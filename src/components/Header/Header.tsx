import type { NavItems } from "./HeaderType";

import { HeaderBrand } from "./HeaderBrand/headerBrand";
import { HeaderNav } from "./HeaderNav/headerNav";
import { HeaderBalance } from "./HeaderBalance/headerBalance";

import { useSelector } from "react-redux";
import { selectAvailableBalance } from "@/feature/available/available";

const items: NavItems[] = [
    { id: "transaction", label: "💸 Transaction", href: "#transaction" },
    { id: "dashboard", label: "🏠 Dashboard", href: "#dashboard" },
    { id: "ai", label: "🤖 AI Assistant", href: "#ai" },
];
function Header() {

    const available = useSelector(selectAvailableBalance);

    return (
        <header className="bg-(--color-bg) shadow-soft rounded-md border border-border">
            <div className="flex flex-col gap-5 p-3.5">
                <HeaderBrand />
                <HeaderNav item={items} />
                <HeaderBalance Balance={available} />
            </div>
        </header>
    )
}

export default Header