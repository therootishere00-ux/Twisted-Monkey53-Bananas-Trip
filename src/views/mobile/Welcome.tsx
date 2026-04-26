"use client";

import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";

const greetings = [
  "Привет, юзер!",
  "Да пребудет с тобой Сила!",
  "Готов к Гак?",
  "Ну что, начнем?",
  "Сап, юзер!"
];

export default function Welcome() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#F2F4F7] animate-in fade-in duration-700">
      <div className="text-center mb-8 px-6">
        <h1 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight">
          {greeting}
        </h1>
        <h2 className="text-[22px] font-bold text-[#636E82] tracking-tight">
          Я помогу тебе с любым вопросом в SWGoH
        </h2>
      </div>

      <ChatInput />
    </div>
  );
}
