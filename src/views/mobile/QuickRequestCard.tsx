interface QuickRequestCardProps {
  title: string;
  icon: React.ReactNode;
  glowColor: "blue" | "green" | "purple";
}

const glowClasses = {
  blue: "card-glow-blue",
  green: "card-glow-green",
  purple: "card-glow-purple",
};

export default function QuickRequestCard({ title, icon, glowColor }: QuickRequestCardProps) {
  return (
    <button className={`bg-[#121214] p-5 rounded-[20px] flex flex-col justify-between aspect-square transition-all active:scale-95 ${glowClasses[glowColor]}`}>
      <div className="w-full flex justify-end mb-2">
        {icon}
      </div>
      <span className="text-[15px] font-bold text-white text-left leading-tight">
        {title}
      </span>
    </button>
  );
}
