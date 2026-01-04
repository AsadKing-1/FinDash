import { Button } from "@ui/button";

interface HeaderBalanceProps {
  openModalFN: (valueBool: boolean) => void;
  Balance: number;
}

export const HeaderBalance = ({ Balance, openModalFN }: HeaderBalanceProps) => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center">
      <div className="bg-[#16181a]/50 p-2 rounded-lg border-border border md:flex md:items-center md:gap-2 md:border-none md:mt-2.5">
        <div className="text-[#b9bfc4] font-semibold text-[14px]">
          Current Balance:
        </div>
        <div>
          <div className="text-[19px]  text-white font-extrabold md:text-[18px]">
            $ {Balance}
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="text-[14px] text-[#b9bfc4] md:hidden">Quick Actions:</div>
        <div className="flex justify-between items-center gap-1 mt-2">
          <div className="w-full">
            <Button onClick={() => openModalFN(true)} className="w-full btn font-semibold">
              Recharge Balance
            </Button>
          </div>
          <div className="w-10">
            <Button
              onClick={() => openModalFN(true)}
              className="bg-(--color-card) border border-(--color-border) rounded-md w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
