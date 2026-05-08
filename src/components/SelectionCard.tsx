type SelectionCardProps = {
  label: string;
  image?: string;
  onClick: () => void;
};

export function SelectionCard({
  label,
  image,
  onClick,
}: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
className="
  group w-full rounded-2xl border border-zinc-800 bg-zinc-900
  p-4 hover:border-indigo-500/40 hover:bg-zinc-900/80
  hover:-translate-y-1 hover:scale-[1.02]
  transition-all duration-300
"
    >
      {image && (
        <div className="overflow-hidden rounded-xl mb-3">
          <img
            src={image}
            alt={label}
            className="
              w-full
              h-24
              object-cover
              group-hover:scale-110
              transition-transform
              duration-300
            "
          />
        </div>
      )}

      <p className="text-base font-semibold text-white">
        {label}
      </p>
    </button>
  );
}