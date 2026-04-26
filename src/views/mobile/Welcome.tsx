"use client";

import ChatInput from "./ChatInput";

export default function Welcome() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      
      {/* Центральные плашки */}
      <div className="w-full px-6 grid grid-cols-2 gap-4">
        <div className="glass aspect-square rounded-[28px] flex items-center justify-center">
          <div className="w-12 h-12 bg-white/5 rounded-2xl" />
        </div>
        <div className="glass aspect-square rounded-[28px] flex items-center justify-center">
          <div className="w-12 h-12 bg-white/5 rounded-2xl" />
        </div>
        <div className="glass aspect-square rounded-[28px] flex items-center justify-center">
          <div className="w-12 h-12 bg-white/5 rounded-2xl" />
        </div>
        <div className="glass aspect-square rounded-[28px] flex items-center justify-center">
          <div className="w-12 h-12 bg-white/5 rounded-2xl" />
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
