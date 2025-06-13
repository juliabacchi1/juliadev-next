import { Plus } from "lucide-react";

type CardProps = {
  title: string;
  bgColor: string;
  icon: React.ReactNode;
};

export function Card({
  title,
  bgColor,
  icon,
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 relative flex flex-col items-center justify-center text-white`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-20 h-20 mb-4">{icon}</div>

      <h3 className="text-xl text-center font-semibold leading-snug">
        {title}
      </h3>

      <button className="absolute top-2 right-2 bg-white text-yellow-500 rounded-full w-6 h-6 flex items-center justify-center shadow">
        <Plus size={16} />
      </button>
    </div>
  );
}
