"use client";

import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";

const greetings = [
  "Привет, командир!",
  "Да пребудет сила!",
  "Сап, юзер!",
  "Что на душе?"
];

export default function Welcome() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-black animate-in fade-in duration-1000">
      
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#1C1C1E] flex items-center justify-center active:scale-90 transition-transform">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-5 h-5 object-contain invert" 
          />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="flex items-center gap-5 w-full max-w-[400px]">
          <div className="w-[85px] h-[85px] shrink-0">
            <img 
              src="/gifs/assistant.GIF" 
              alt="Assistant" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-[24px] font-bold text-[#F2F2F7] tracking-tight leading-tight">
              {greeting}
            </h1>
            <h2 className="text-[24px] font-bold text-[#636366] tracking-tight leading-tight">
              Помогу с любым вопросом в SWGoH
            </h2>
          </div>
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
