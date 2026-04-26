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
    <button className={`bg-[#0F1425] border p-5 rounded-2xl flex items-center justify-between transition-all active:scale-95 ${glowClasses[glowColor]}`}>
      <span className="text-sm font-medium text-white/90 text-left leading-snug max-w-[60%]">
        {title}
      </span>
      <div className="shrink-0 scale-110">
        {icon}
      </div>
    </button>
  );
}
