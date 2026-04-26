"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-16 pb-10 animate-in fade-in duration-700">
      
      {/* Menu Button */}
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#121B33] flex items-center justify-center">
          <Menu size={22} className="text-white" />
        </button>
      </div>

      {/* Hero Section: GIF слева, текст справа */}
      <div className="flex items-center gap-5 mb-14 mt-12">
        {/* Крупный GIF */}
        <div className="w-[120px] h-[120px] shrink-0">
          <img 
            src="/gifs/assistant.GIF" 
            alt="AI Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Компактный текст */}
        <div className="flex-1">
          <h1 className="text-[26px] font-bold text-white leading-tight mb-2 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[15px] text-white/80 leading-snug">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      {/* Quick Requests */}
      <div className="w-full">
        <h2 className="text-[17px] font-bold text-white mb-6">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickRequestCard title="Команды для ГВ" tint="blue" />
          <QuickRequestCard title="Лучшая арена защиты" tint="blue" />
          <QuickRequestCard title="Фарм персонажей" tint="green" />
          <QuickRequestCard title="Советы по рейдам" tint="purple" />
        </div>
      </div>

    </div>
  );
}
