"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Users, ShieldCheck, Gem, Target, Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-6 pt-16 pb-10 animate-in fade-in duration-500">
      
      <div className="absolute top-6 left-6">
        <button className="text-white">
          <Menu size={28} />
        </button>
      </div>

      <div className="flex items-start justify-between mb-12 mt-12">
        <div className="max-w-[70%]">
          <h1 className="text-[32px] font-bold text-white leading-tight mb-3">
            Привет, командир!
          </h1>
          <p className="text-[16px] text-white leading-snug">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
        <div className="w-[70px] h-[70px] shrink-0 pt-2">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-[18px] font-bold text-white mb-6">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <QuickRequestCard 
            title="Команды для ГВ" 
            icon={<Users className="text-[#4F95FF]" size={26} />} 
            glowColor="blue"
          />
          <QuickRequestCard 
            title="Лучшая арена защиты" 
            icon={<ShieldCheck className="text-[#3B82F6]" size={26} />} 
            glowColor="blue"
          />
          <QuickRequestCard 
            title="Фарм персонажей" 
            icon={<Gem className="text-[#4ADE80]" size={26} />} 
            glowColor="green"
          />
          <QuickRequestCard 
            title="Советы по рейдам" 
            icon={<Target className="text-[#A855F7]" size={26} />} 
            glowColor="purple"
          />
        </div>
      </div>

    </div>
  );
}
