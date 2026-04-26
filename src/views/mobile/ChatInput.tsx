"use client";

import { useState } from "react";

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
          className="w-full bg-[#F2F4F7] border border-transparent rounded-[28px] py-[14px] pl-6 pr-14 text-[17px] leading-tight outline-none placeholder:text-[#94A3B8]"
        />
        <button
          disabled={!value}
          className={`absolute right-2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "bg-[#1A1A1A]" : "bg-[#D1D9E6]"
          }`}
        >
          <img 
            src="/icons/send.PNG" 
            alt="Send" 
            className="w-4 h-4 object-contain invert" 
          />
        </button>
      </div>
      <p className="mt-4 text-center text-[12px] font-medium text-[#94A3B8] leading-snug">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
