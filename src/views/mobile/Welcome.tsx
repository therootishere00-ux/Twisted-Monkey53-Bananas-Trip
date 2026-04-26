"use client";

import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-6 pt-12 pb-10 animate-in fade-in duration-700">
      
      <div className="absolute top-6 left-6">
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-4 h-4 object-contain invert" 
          />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-12 mt-14">
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
          <p className="text-[14px] text-white/50 leading-snug font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-[15px] font-medium text-white/50 mb-5 text-left">
          Быстрые запросы
        </h2>
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

    </div>
  );
}
