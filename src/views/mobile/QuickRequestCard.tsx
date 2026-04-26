interface QuickRequestCardProps {
  title: string;
  iconName: string;
}

export default function QuickRequestCard({ title, iconName }: QuickRequestCardProps) {
  return (
    <button className="glass-card p-5 rounded-full flex items-center justify-between min-h-[80px] transition-all active:scale-[0.98] w-full group overflow-hidden">
      <span className="text-[15px] font-medium text-white/90 text-left leading-tight pr-3 group-active:text-white transition-colors">
        {title}
      </span>
      <div className="w-10 h-10 shrink-0 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/5 rounded-full scale-110 group-active:scale-125 transition-transform" />
        <img 
          src={`/icons/${iconName}`} 
          alt="" 
          className="w-full h-full object-contain relative z-10" 
        />
      </div>
    </button>
  );
}
