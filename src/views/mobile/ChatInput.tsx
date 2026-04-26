"use client";

import { useState } from "react";

export default function ChatInput() {
  const [value, setValue] = useState("");

  return (
    <div className="fixed bottom-10 left-0 w-full px-6 z-50">
      <div className="glass w-full rounded-[24px] min-h-[110px] p-4 flex flex-col justify-between">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Спросить что-нибудь…"
          className="bg-transparent border-none text-white text-[16px] placeholder:text-white/30 resize-none h-[60px] w-full leading-snug"
        />
        <div className="flex justify-end w-full">
          <button className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center active:scale-95 transition-transform">
            <img 
              src="/icons/send.PNG" 
              alt="Send" 
              className="w-5 h-5 object-contain invert" 
            />
          </button>
        </div>
      </div>
    </div>
  );
}
