"use client";

import { Menu } from "lucide-react";

export default function Welcome() {
  const requests = [
    "Команды для ГВ",
    "Лучшая арена защиты",
    "Фарм персонажей",
    "Советы по рейдам"
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full px-6 pt-16 pb-10 animate-in fade-in duration-500">
      
      {/* Menu Button */}
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-[#1A1F36] flex items-center justify-center active:scale-95 transition-transform">
          <Menu size={22} className="text-white" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-between mb-10 mt-14">
        <div className="flex-1 pr-4">
          <h1 className="text-[28px] font-bold text-white leading-tight mb-2">
            Привет, командир!
          </h1>
          <p className="text-[15px] text-white/90 leading-tight">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
        {/* Гифка размером с текстовый блок */}
        <div className="w-[120px] h-[120px] shrink-0">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>

      {/* Quick Requests Area */}
      <div className="w-full">
        <h2 className="text-[17px] font-bold text-white mb-5 uppercase tracking-wider opacity-80">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {requests.map((text, idx) => (
            <button 
              key={idx}
              className="bg-[#1A1F36] h-[100px] rounded-xl p-4 flex items-start justify-start text-left transition-all active:scale-95"
            >
              <span className="text-[14px] font-bold text-white leading-tight">
                {text}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
