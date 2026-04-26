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
          className="w-full bg-[#1C1C1E] border border-transparent rounded-[24px] py-[12px] pl-5 pr-12 text-[16px] text-white leading-tight outline-none placeholder:text-[#636366]"
        />
        <button
          disabled={!value}
          className={`absolute right-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "bg-[#F2F2F7]" : "bg-[#2C2C2E]"
          }`}
        >
          <img 
            src="/icons/send.PNG" 
            alt="Send" 
            className={`w-3.5 h-3.5 object-contain ${value ? "invert-0" : "invert"}`} 
          />
        </button>
      </div>
      <p className="mt-4 text-center text-[11px] font-medium text-[#636366] leading-snug">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
