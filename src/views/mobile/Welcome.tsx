"use client";

import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-6 pt-12 pb-10 animate-in fade-in duration-500">
      
      <div className="absolute top-6 left-6">
        <button className="p-0 border-none bg-transparent active:opacity-50 transition-opacity">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-6 h-6 object-contain invert" 
          />
        </button>
      </div>

      <div className="flex items-start gap-4 mb-14 mt-16">
        <div className="w-[150px] h-[150px] shrink-0 gif-mask -ml-2">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 pt-2">
          <h1 className="text-[20px] font-bold text-white leading-tight mb-2 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[14px] text-white/50 leading-snug font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-[15px] font-medium text-white/50 mb-5 text-left pl-1">
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
