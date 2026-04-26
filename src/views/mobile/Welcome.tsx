"use client";

import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col min-h-screen w-full px-7 pt-12 pb-10 animate-in fade-in duration-700">
      
      {/* Menu Button */}
      <div className="absolute top-6 left-6 z-10">
        <button className="text-white opacity-80 active:opacity-100 active:scale-95 transition-all">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-6 h-6 object-contain invert" 
          />
        </button>
      </div>

      {/* Profile Button (добавим, как на фото, для баланса) */}
      <div className="absolute top-6 right-6 z-10">
        <button className="text-white opacity-80 active:opacity-100 active:scale-95 transition-all">
          <img 
            src="/icons/profile.PNG" 
            alt="Profile" 
            className="w-6 h-6 object-contain invert" 
          />
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex items-start gap-4 mb-10 mt-16 px-1">
        {/* Крупный GIF с маской */}
        <div className="w-[180px] h-[180px] shrink-0 gif-mask -ml-8 -mt-2">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Текст выровнен по верхней линии GIF */}
        <div className="flex-1 pt-6 pr-2">
          <h1 className="text-[20px] font-bold text-white leading-tight mb-2 tracking-tight">
            Привет, командир!
          </h1>
          <p className="text-[14px] text-white/60 leading-relaxed font-medium">
            Я — твой ИИ-ассистент по SWGOH. Чем могу помочь?
          </p>
        </div>
      </div>

      {/* Quick Requests */}
      <div className="w-full">
        <h2 className="text-[15px] font-bold text-white mb-6">
          Быстрые запросы
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickRequestCard 
            title="Команды для ГВ" 
            iconName="card1.PNG" 
            tint="blue"
          />
          <QuickRequestCard 
            title="Лучшая арена защиты" 
            iconName="card2.PNG" 
            tint="blue"
          />
          <QuickRequestCard 
            title="Фарм персонажей" 
            iconName="card3.PNG" 
            tint="green"
          />
          <QuickRequestCard 
            title="Советы по рейдам" 
            iconName="card4.PNG" 
            tint="purple"
          />
        </div>
      </div>

    </div>
  );
}
