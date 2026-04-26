interface QuickRequestCardProps {
  title: string;
  iconName: string;
}

export default function QuickRequestCard({ title, iconName }: QuickRequestCardProps) {
  return (
    <div className="bg-[#1C1C1E] p-4 rounded-2xl flex items-center justify-between min-h-[72px] w-full">
      <span className="text-[14px] font-medium text-[#F2F2F7] text-left leading-tight pr-2">
        {title}
      </span>
      <div className="w-8 h-8 shrink-0 flex items-center justify-center">
        <img 
          src={`/icons/${iconName}`} 
          alt="" 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  );
}
