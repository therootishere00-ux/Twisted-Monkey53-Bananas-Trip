"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-16 pb-10 animate-in fade-in duration-700">
      
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#121B33] flex items-center justify-center">
          <Menu size={20} className="text-white/80" />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-12 mt-12">
        <div className="w-[140px] h-[140px] shrink-0 gif-mask">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-[20px] font-bold text-white leading-tight mb-1 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[14px] text-white/60 leading-snug font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-[14px] font-medium text-white/50 mb-5 tracking-wide uppercase">
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
