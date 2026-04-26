"use client";

import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";

const greetings = [
  "Привет, юзер!",
  "Да пребудет с тобой сила, юзер!",
  "Сап, юзер!",
  "Что на душе, юзер?"
];

export default function Welcome() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white animate-in fade-in duration-700">
      
      <div className="pt-6 pl-6">
        <div className="w-[52px] h-[52px] bg-[#F2F4F7] rounded-full flex items-center justify-center">
          <img src="/icons/menu.PNG" alt="Menu" className="w-6 h-6 object-contain" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <img src="/images/applogo.PNG" alt="Logo" className="w-[28px] h-[28px] object-contain" />
            <h1 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight">
              {greeting}
            </h1>
          </div>
          <h2 className="text-[22px] font-bold text-[#636E82] tracking-tight">
            Я помогу тебе с любым вопросом в SWGoH
          </h2>
        </div>

        <ChatInput />
      </div>
    </div>
  );
}
