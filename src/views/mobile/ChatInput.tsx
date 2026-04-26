"use client";

import { useState } from "react";

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
          className="w-full bg-[#F2F4F7] rounded-[24px] py-[14px] pl-6 pr-14 text-[17px] leading-tight outline-none placeholder:text-[#94A3B8] transition-all"
        />
        <button
          disabled={!value}
          className={`absolute right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            value ? "opacity-100" : "opacity-40"
          }`}
        >
          <img src="/icons/send.PNG" alt="Send" className="w-full h-full object-contain" />
        </button>
      </div>
      <p className="mt-4 text-left text-[12px] font-medium text-[#94A3B8] leading-snug">
        Это ИИ. Иногда он может давать неверную информацию
      </p>
    </div>
  );
}
