"use client";

import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-12 pb-10 animate-in fade-in duration-700">
      
      <div className="absolute top-6 left-6 z-10">
        <button className="w-11 h-11 rounded-full bg-[#121B33]/60 backdrop-blur-sm border border-white/5 flex items-center justify-center active:scale-90 transition-all">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-[18px] h-[18px] object-contain invert" 
          />
        </button>
      </div>

      <div className="flex items-start gap-4 mb-10 mt-16">
        <div className="w-[200px] h-[200px] shrink-0 gif-mask -ml-10 -mt-5">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 pt-10 relative z-10">
          <h1 className="text-[22px] font-bold text-white leading-tight mb-2.5 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[15px] text-white/60 leading-relaxed font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      <div className="w-full relative z-10">
        <h2 className="text-[16px] font-medium text-white/50 mb-6">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-4">
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
