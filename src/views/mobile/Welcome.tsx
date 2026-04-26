"use client";

import QuickRequestCard from "./QuickRequestCard";
import { Users, ShieldCheck, Gem, Target, Menu } from "lucide-react";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-6 pt-16 pb-10 animate-in fade-in duration-700">
      
      {/* Header with Menu */}
      <div className="absolute top-6 left-6">
        <button className="text-white active:opacity-70 transition-opacity">
          <Menu size={24} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-between mb-12 mt-10">
        <div className="max-w-[65%]">
          <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-2">
            Привет, командир!
          </h1>
          <p className="text-sm text-white/70 leading-relaxed">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
        <div className="w-[80px] h-[80px] shrink-0">
          <img 
            src="/gifs/assistant.GIF" 
            alt="AI Assistant" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>

      {/* Quick Requests Section */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-white/80 mb-5">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <QuickRequestCard 
            title="Команды для ГВ" 
            icon={<Users className="text-blue-400" size={28} strokeWidth={1.5} />} 
            glowColor="blue"
          />
          <QuickRequestCard 
            title="Лучшая арена защиты" 
            icon={<ShieldCheck className="text-blue-500" size={28} strokeWidth={1.5} />} 
            glowColor="blue"
          />
          <QuickRequestCard 
            title="Фарм персонажей" 
            icon={<Gem className="text-green-400" size={28} strokeWidth={1.5} />} 
            glowColor="green"
          />
          <QuickRequestCard 
            title="Советы по рейдам" 
            icon={<Target className="text-purple-400" size={28} strokeWidth={1.5} />} 
            glowColor="purple"
          />
        </div>
      </div>

    </div>
  );
}
