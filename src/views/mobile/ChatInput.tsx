"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ChatInput() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-[400px] px-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Спросить что-нибудь…"
          className="w-full bg-white border border-[#E2E8F0] rounded-[28px] py-[18px] pl-6 pr-14 text-[17px] leading-tight outline-none placeholder:text-[#94A3B8] transition-all"
        />
        <button
          disabled={!value}
          className={`absolute right-2.5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "bg-[#1A1A1A] text-white" : "bg-[#F2F2F7] text-[#94A3B8]"
          }`}
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      </div>
      <p className="mt-4 text-center text-[12px] font-medium text-[#94A3B8] leading-snug">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
