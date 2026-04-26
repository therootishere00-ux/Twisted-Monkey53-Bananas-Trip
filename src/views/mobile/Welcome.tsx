"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-12 pb-10 animate-in fade-in duration-700">
      
      {/* Menu Button - немного сместил для баланса с крупным GIF */}
      <div className="absolute top-6 left-6 z-10">
        <button className="w-10 h-10 rounded-full bg-[#121B33]/50 backdrop-blur-md flex items-center justify-center">
          <Menu size={20} className="text-white/80" />
        </button>
      </div>

      {/* Hero Section: GIF теперь доминирует сверху */}
      <div className="flex items-start gap-4 mb-10 mt-14">
        {/* Экстремально крупный GIF, уходящий вверх */}
        <div className="w-[180px] h-[180px] shrink-0 gif-mask -ml-4">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Текст выровнен по верхней линии GIF */}
        <div className="flex-1 pt-4">
          <h1 className="text-[20px] font-bold text-white leading-tight mb-1.5 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[13px] text-white/50 leading-snug font-medium max-w-[140px]">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      {/* Quick Requests: Сдвинуты выше благодаря компактности хедера */}
      <div className="w-full">
        <h2 className="text-[13px] font-medium text-white/40 mb-5 tracking-[0.1em] uppercase">
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
