"use client";

import { useState } from "react";

export default function ChatInput() {
  const [value, setValue] = useState("");

  return (
    <div className="fixed bottom-8 left-0 w-full px-6 flex flex-col items-center">
      <div className="relative flex items-center w-full max-w-[400px]">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Спросить что-нибудь…"
          className="w-full bg-[#1C1C1E] border border-transparent rounded-[28px] py-[16px] pl-6 pr-14 text-[17px] text-white leading-tight outline-none placeholder:text-[#636366] transition-all focus:bg-[#252529]"
        />
        <button
          disabled={!value}
          className={`absolute right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "bg-[#F2F2F7]" : "bg-[#2C2C2E]"
          }`}
        >
          <img 
            src="/icons/send.PNG" 
            alt="Send" 
            className={`w-4 h-4 object-contain ${value ? "invert-0" : "invert"}`} 
          />
        </button>
      </div>
      <p className="mt-4 text-[11px] font-medium text-[#636366] tracking-wide">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
