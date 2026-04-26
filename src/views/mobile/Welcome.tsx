"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChatInput from "./ChatInput";

const greetings = [
  "Сап",
  "Привет",
  "Да прибудет с тобой сила"
];

export default function Welcome() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white animate-in fade-in duration-700">
      <header className="p-6">
        <button className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center">
          <div className="relative w-5 h-5">
            <Image 
              src="/icons/menu.PNG" 
              alt="Menu" 
              fill 
              className="object-contain"
            />
          </div>
        </button>
      </header>

      <main className="flex-1 flex flex-col justify-center">
        <div className="px-6 mb-10">
          <h1 className="text-[32px] font-bold text-[#1A1A1A] tracking-tight leading-tight">
            {greeting}
          </h1>
          <h2 className="text-[32px] font-bold text-[#636E82] tracking-tight leading-tight">
            Я помогу тебе с любым вопросом в SWGoH
          </h2>
        </div>

        <ChatInput />
      </main>
    </div>
  );
}
