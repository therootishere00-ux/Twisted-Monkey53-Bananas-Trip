"use client";

import ChatInput from "./ChatInput";
import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col h-screen w-full pt-6">
      
      <div className="w-full px-6 flex justify-start shrink-0 z-10">
        <button className="glass-base w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-transform">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-5 h-5 object-contain invert" 
          />
        </button>
      </div>

      <div className="w-full px-6 mt-8 shrink-0 flex items-start gap-4">
        <div className="w-[140px] h-[140px] shrink-0 gif-mask -ml-3">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 pt-3">
          <h1 className="text-[20px] font-bold text-white leading-tight mb-2 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[14px] text-white/50 leading-snug font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      <div className="w-full px-6 mt-6 shrink-0">
        <h2 className="text-[14px] font-normal text-white/50 mb-4 text-left pl-1">
          Что спросить?
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickRequestCard title="Команды для ГВ" iconName="card1.PNG" />
          <QuickRequestCard title="Лучшая арена защиты" iconName="card2.PNG" />
          <QuickRequestCard title="Фарм персонажей" iconName="card3.PNG" />
          <QuickRequestCard title="Советы по рейдам" iconName="card4.PNG" />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
