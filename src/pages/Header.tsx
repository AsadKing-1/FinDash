import { HeaderBalance } from "@/components/Header/HeaderBalance/HeaderBalance";
import { HeaderBrand } from "@/components/Header/HeaderBrand/HeaderBrand";
import { HeaderNav } from "@/components/Header/HeaderNav/HeaderNav";

import { useSelector } from "react-redux";
import { selectAvailableBalance } from "@/feature/available/available";

function Header({ openModalFN }: { openModalFN: (value: boolean) => void }) {
  const available = useSelector(selectAvailableBalance);

  return (
    <header className="bg-(--color-card) shadow-soft rounded-md border border-border">
      <div className="flex flex-col gap-5 p-3.5">
        <HeaderBrand />
        <HeaderNav />
        <HeaderBalance openModalFN={openModalFN} Balance={available} />
      </div>
    </header>
  );
}

export default Header;
