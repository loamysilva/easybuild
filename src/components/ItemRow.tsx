type Item = {
  name: string;
  image: string;
};

type ItemRowProps = {
  title: string;
  items: Item[];
};

export function ItemRow({
  title,
  items,
}: ItemRowProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2">
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>
      <div className="
                flex
                gap-6
                flex-wrap
                justify-center
                ">
        {items.map((item) => (
          <div
            key={item.name}
            className="
                flex flex-col items-center gap-2
                transition duration-200 hover:scale-110
                "
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                w-10
                h-10
                rounded-lg
                object-cover
                "
            />

            <span className="
                text-xs
                text-zinc-400
                text-center
                max-w-[80px]
                ">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}