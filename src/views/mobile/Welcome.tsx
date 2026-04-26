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
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-white animate-in fade-in duration-700">
      
      {/* Menu Button */}
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#F2F4F7] flex items-center justify-center active:scale-95 transition-transform">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-5 h-5 object-contain" 
          />
        </button>
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-[400px] px-6 mb-6">
        <div className="flex items-start gap-4">
          <img 
            src="/icons/applogo.PNG" 
            alt="Logo" 
            className="w-[44px] h-[44px] object-contain shrink-0" 
          />
          <div className="flex flex-col items-start">
            <h1 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight leading-tight">
              {greeting}
            </h1>
            <h2 className="text-[22px] font-bold text-[#636E82] tracking-tight leading-tight">
              Я помогу тебе с любым вопросом в SWGoH
            </h2>
          </div>
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
