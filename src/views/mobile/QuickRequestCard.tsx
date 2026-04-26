interface QuickRequestCardProps {
  title: string;
  iconName: string;
  onClick?: () => void;
}

export default function QuickRequestCard({
  title,
  iconName,
  onClick,
}: QuickRequestCardProps) {
  return (
    <button type="button" className="welcome-request-card" onClick={onClick}>
      <span className="welcome-request-title">{title}</span>
      <span className="welcome-request-icon-wrap">
        <img
          src={`/icons/${iconName}`}
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
    </button>
  );
}
