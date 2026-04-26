interface QuickRequestCardProps {
  title: string;
  iconName: string;
}

export default function QuickRequestCard({ title, iconName }: QuickRequestCardProps) {
  return (
    <button className="glass-card p-4 rounded-full flex items-center justify-between min-h-[72px] transition-all active:scale-[0.98] w-full">
      <span className="text-[14px] font-medium text-white/80 text-left leading-tight pl-2 pr-2">
        {title}
      </span>
      <div className="w-9 h-9 shrink-0 flex items-center justify-center">
        <img 
          src={`/icons/${iconName}`} 
          alt="" 
          className="w-full h-full object-contain" 
        />
      </div>
    </button>
  );
}
