import { HeaderBalance } from "./HeaderBalance";
import { HeaderBrand } from "./HeaderBrand";

import { useSelector } from "react-redux";
import { selectAvailableBalance } from "@/feature/available/model/selector";

function Header({ openModalFN }: { openModalFN: (value: boolean) => void }) {
  const available = useSelector(selectAvailableBalance);

  return (
    <header className="bg-(--color-card) w-full shadow-soft rounded-md border border-border">
      <div className="flex flex-col gap-5 p-3.5 md:flex md:flex-row md:justify-between md:items-center">
        <HeaderBrand />
        <HeaderBalance openModalFN={openModalFN} Balance={available} />
      </div>
    </header>
  );
}

export default Header;
