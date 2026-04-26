interface QuickRequestCardProps {
  title: string;
}

export default function QuickRequestCard({ title }: QuickRequestCardProps) {
  return (
    <button className="bg-[#121B33] p-5 rounded-2xl flex items-center justify-start min-h-[70px] transition-all active:scale-[0.97]">
      <span className="text-[15px] font-semibold text-white text-left leading-tight">
        {title}
      </span>
    </button>
  );
}
