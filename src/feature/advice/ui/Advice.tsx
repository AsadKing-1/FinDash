import { useState } from "react";

import { Button } from "@/ui/button";

import { adviceData } from "../model/adviceData";

export function Advice() {
    const [language, setLanguage] = useState<"EN" | "RU">("EN");
    const minLength = Math.min(adviceData.EN.length, adviceData.RU.length);
    const [index, setIndex] = useState<number>(() => Math.floor(Math.random() * minLength));
    const adviceList = language === "EN" ? adviceData.EN : adviceData.RU;

    return (
        <div className="bg-(--color-card) border border-(--color-border) p-5 rounded-md ">
            <div className="flex justify-between items-center">
                <h2>💡 Financial Advice</h2>
                <div className="flex gap-1">
                    <Button className="btn px-3.5 h-6" onClick={() => setLanguage("EN")}>EN</Button>
                    <Button className="btn px-3.5 h-6" onClick={() => setLanguage("RU")}>RU</Button>
                </div>
            </div>
            <div className="mt-3 mb-3">
                <p>{adviceList[index]?.text}</p>
            </div>
            <div>
                <Button className="btn w-full h-7.5 text-[16px] mt-3" onClick={() => setIndex(Math.floor(Math.random() * minLength))}>Next</Button>
            </div>
        </div>
    )
}