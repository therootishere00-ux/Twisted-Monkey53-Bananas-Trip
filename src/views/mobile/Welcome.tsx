"use client";

import ChatInput from "./ChatInput";
import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col h-screen w-full px-6 pt-12 animate-in fade-in duration-500">
      
      <div className="absolute top-6 left-6 z-20">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center active:scale-90 transition-transform">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-5 h-5 object-contain invert" 
          />
        </button>
      </div>

      <div className="flex items-center gap-4 mt-16 mb-10 z-10 relative">
        <div className="w-[140px] h-[140px] shrink-0 gif-mask -ml-2">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1 pt-2">
          <h1 className="text-[22px] font-bold text-white leading-tight mb-2 tracking-tight">
            Привет, командир!
          </h1>
          <h2 className="text-[14px] font-medium text-white/50 leading-snug">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </h2>
        </div>
      </div>

      <div className="w-full z-10 relative">
        <h3 className="text-[14px] font-normal text-white/40 mb-4 pl-1">
          Что спросить?
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <QuickRequestCard 
            title="Команды для ГВ" 
            iconName="card1.PNG" 
          />
          <QuickRequestCard 
            title="Лучшая арена защиты" 
            iconName="card2.PNG" 
          />
          <QuickRequestCard 
            title="Фарм персонажей" 
            iconName="card3.PNG" 
          />
          <QuickRequestCard 
            title="Советы по рейдам" 
            iconName="card4.PNG" 
          />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
