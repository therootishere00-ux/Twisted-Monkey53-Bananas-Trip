interface QuickRequestCardProps {
  title: string;
  iconName: string;
  tint: "blue" | "green" | "purple";
}

const tintClasses = {
  blue: "bg-[#111A31] tint-blue",
  green: "bg-[#11241E] tint-green",
  purple: "bg-[#1A122C] tint-purple",
};

export default function QuickRequestCard({ title, iconName, tint }: QuickRequestCardProps) {
  return (
    <button className={`p-4 rounded-full flex items-center justify-between min-h-[72px] transition-all active:scale-[0.98] w-full card-glass-glow ${tintClasses[tint]}`}>
      <span className="text-[14px] font-semibold text-white text-left leading-tight pr-2 ml-2">
        {title}
      </span>
      <div className="w-9 h-9 shrink-0 flex items-center justify-center mr-1">
        <img 
          src={`/icons/${iconName}`} 
          alt="" 
          className="w-full h-full object-contain" 
        />
      </div>
    </button>
  );
}
