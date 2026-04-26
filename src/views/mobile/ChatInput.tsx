"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChatInput() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full px-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Спросить что-нибудь…"
          className="w-full bg-[#E2E8F0] rounded-full py-3 pl-6 pr-12 text-[17px] leading-tight outline-none placeholder:text-[#94A3B8]"
        />
        <button
          disabled={!value}
          className={`absolute right-1.5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "bg-[#1A1A1A]" : "bg-[#CBD5E1]"
          }`}
        >
          <div className="relative w-5 h-5">
            <Image 
              src="/icons/send.PNG" 
              alt="Send" 
              fill 
              className="object-contain"
            />
          </div>
        </button>
      </div>
      <p className="mt-3 text-left text-[12px] font-medium text-[#94A3B8]">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
