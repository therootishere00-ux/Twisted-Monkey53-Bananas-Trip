"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-20 pb-10 animate-in fade-in duration-700">
      
      {/* Кнопка меню как на фото */}
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#121B33] flex items-center justify-center">
          <Menu size={22} className="text-white" />
        </button>
      </div>

      {/* Hero Section с крупным GIF */}
      <div className="flex items-start justify-between mb-14">
        <div className="flex-1 pr-4">
          <h1 className="text-[32px] font-bold text-white leading-none mb-3">
            Привет, командир!
          </h1>
          <p className="text-[17px] text-white/80 leading-snug">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
        
        {/* Крупный ассистент, соразмерный текстовому блоку */}
        <div className="w-[110px] h-[110px] shrink-0">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Сетка плашек */}
      <div className="w-full">
        <h2 className="text-[19px] font-bold text-white mb-6">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickRequestCard title="Команды для ГВ" />
          <QuickRequestCard title="Лучшая арена защиты" />
          <QuickRequestCard title="Фарм персонажей" />
          <QuickRequestCard title="Советы по рейдам" />
        </div>
      </div>

    </div>
  );
}
