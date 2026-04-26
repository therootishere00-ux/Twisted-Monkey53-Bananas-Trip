interface QuickRequestCardProps {
  title: string;
  tint: "blue" | "green" | "purple";
}

const tintClasses = {
  blue: "bg-[#0C162D]",
  green: "bg-[#0C2220]",
  purple: "bg-[#181028]",
};

export default function QuickRequestCard({ title, tint }: QuickRequestCardProps) {
  return (
    <button className={`p-5 rounded-2xl flex items-center justify-start min-h-[70px] transition-all active:scale-[0.98] ${tintClasses[tint]}`}>
      <span className="text-[14px] font-medium text-white/70 text-left leading-tight">
        {title}
      </span>
    </button>
  );
}
