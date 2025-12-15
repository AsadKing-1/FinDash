import { Input } from "@/ui/input";
import { Button } from "@/ui/button";

export const DashboardNav = () => {
    return (
        <div className="flex items-center gap-1 justify-between">
            <div className="w-full flex items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-(--color-muted) absolute left-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <Input type="search" className="bg-(--color-card) border border-(--color-glass) p-5 pl-10" placeholder="Search Transactions..." />
            </div>
            <div className="flex gap-1">
                <div>
                    <Button className="bg-(--color-card) border border-(--color-glass) rounded-sm p-5">🔔</Button>
                </div>
                <div>
                    <Button className="bg-(--color-card) border border-(--color-glass) rounded-sm p-5">🔄</Button>
                </div>
            </div>
            
        </div>
    )
}