"use client";

import ChatInput from "./ChatInput";
import QuickRequestCard from "./QuickRequestCard";

export default function Welcome() {
  return (
    <div className="relative flex flex-col h-screen w-full bg-black pt-6 overflow-hidden animate-in fade-in duration-1000">
      <div className="light-rays" />
      
      <div className="w-full px-6 flex justify-start shrink-0 z-10">
        <button className="bg-[#1C1C1E] w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform">
          <img 
            src="/icons/menu.PNG" 
            alt="Menu" 
            className="w-4 h-4 object-contain invert" 
          />
        </button>
      </div>

      <div className="w-full px-6 mt-8 shrink-0 flex items-start gap-5 z-10">
        <div className="w-[150px] h-[150px] shrink-0 gif-mask -ml-2">
          <img 
            src="/gifs/assistant.GIF" 
            alt="Assistant" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 pt-6">
          <h1 className="text-[22px] font-bold text-[#F2F2F7] leading-tight mb-1.5 tracking-tight">
            Привет, командир!
          </h1>
          <h2 className="text-[18px] font-bold text-[#636366] leading-snug tracking-tight">
            Помогу с любым вопросом в SWGoH
          </h2>
        </div>
      </div>

      <div className="w-full px-6 mt-10 shrink-0 z-10">
        <p className="text-[14px] font-normal text-[#636366] mb-4 text-left pl-1">
          Что спросить?
        </p>
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
