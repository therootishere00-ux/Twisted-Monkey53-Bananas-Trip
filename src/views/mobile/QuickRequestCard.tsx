interface QuickRequestCardProps {
  title: string;
  tint: "blue" | "green" | "purple";
}

const tintClasses = {
  blue: "bg-[#0A1D3A] border border-[#1A2F50]",
  green: "bg-[#0A2D2A] border border-[#1A3A35]",
  purple: "bg-[#1F1235] border border-[#2A1F45]",
};

export default function QuickRequestCard({ title, tint }: QuickRequestCardProps) {
  return (
    <button className={`p-5 rounded-2xl flex items-center justify-start min-h-[70px] transition-all active:scale-[0.97] ${tintClasses[tint]}`}>
      <span className="text-[15px] font-semibold text-white/90 text-left leading-tight max-w-[90%]">
        {title}
      </span>
    </button>
  );
}
