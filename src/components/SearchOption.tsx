type SearchOptionProps = {
  label: string;
  onClick: () => void;
};

export function SearchOption({
  label,
  onClick,
}: SearchOptionProps) {
  return (
    <button
      onClick={onClick}
className="
  w-full rounded-xl border border-zinc-800 bg-zinc-900
  px-5 py-3 text-left text-sm font-semibold
  hover:border-indigo-500/40 hover:bg-zinc-800 hover:translate-x-1
  transition-all duration-300
"
    >
      {label}
    </button>
  );
}