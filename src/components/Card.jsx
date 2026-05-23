const colorMap = {
  cyan: {
    border: "border-primary-container/30",
    text: "text-primary-container",
    tag: "border-primary-container/50 text-primary-container",
    dot: "bg-primary-container",
    dotDim: "bg-primary-container/30",
  },
  purple: {
    border: "border-secondary/30",
    text: "text-secondary",
    tag: "border-secondary/50 text-secondary",
    dot: "bg-secondary",
    dotDim: "bg-secondary/30",
  },
  gold: {
    border: "border-tertiary-container/30",
    text: "text-tertiary-container",
    tag: "border-tertiary-container/50 text-tertiary-container",
    dot: "bg-tertiary-container",
    dotDim: "bg-tertiary-container/30",
  },
};

function Card({ project }) {
  const { id, name, description, url, completed, tags, icon, color, size, image } =
    project;

  if (!completed) {
    return (
      <div className="aspect-square border border-outline-variant/10 bg-surface-container-lowest flex items-center justify-center transition-colors hover:border-outline-variant/30">
        <span className="font-[JetBrains_Mono] text-xs text-outline/30">
          {String(id).padStart(3, "0")}
        </span>
      </div>
    );
  }

  const c = colorMap[color] || colorMap.cyan;
  const isLarge = size === "large";

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded transition-all duration-500 hover:scale-[1.02] border ${c.border} bg-surface-container-high completed-glow block ${
        isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      }`}
    >
      <div className="scan-line" style={{ animationDelay: `${(id % 3) * 0.7}s` }} />

      {isLarge && image && (
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
          src={image}
          alt=""
        />
      )}

      <div className={`relative flex flex-col h-full justify-between ${isLarge ? "p-6" : "p-4"}`}>
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className={`font-[JetBrains_Mono] ${isLarge ? "text-2xl" : "text-xs"} ${c.text}`}>
              {String(id).padStart(3, "0")}
            </span>
            {icon ? (
              <span className={`material-symbols-outlined ${c.text} text-sm`}>{icon}</span>
            ) : isLarge ? (
              <span className="font-[JetBrains_Mono] text-xs bg-primary-container text-on-primary px-2 py-1 rounded">
                运行中
              </span>
            ) : null}
          </div>
          <h3
            className={`font-[Sora] text-white leading-tight ${
              isLarge ? "text-2xl font-semibold" : "text-base font-semibold"
            }`}
          >
            {name}
          </h3>
          {description && (
            <p className={`text-on-surface-variant mt-2 ${isLarge ? "text-sm" : "text-xs"}`}>
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`font-[JetBrains_Mono] text-[10px] border ${c.tag} px-2 py-0.5 rounded`}
            >
              {tag}
            </span>
          ))}
          {!isLarge && (
            <div className="flex gap-1 mt-1">
              <div className={`w-1 h-1 ${c.dot}`} />
              <div className={`w-1 h-1 ${c.dot}`} />
              <div className={`w-1 h-1 ${c.dotDim}`} />
            </div>
          )}
        </div>
      </div>

      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={name}
        />
      ) : null}
    </div>
  );
}

export default Card;
