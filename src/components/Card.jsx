const colorMap = {
  cyan: {
    className: "tone-cyan",
  },
  purple: {
    className: "tone-purple",
  },
  gold: {
    className: "tone-gold",
  },
};

function Card({ project }) {
  const { id, name, description, url, completed, tags, color, size, image } =
    project;

  if (!completed) {
    return (
      <div className="project-card project-card-empty" aria-label={`待实现项目 ${id}`}>
        <span>{String(id).padStart(3, "0")}</span>
      </div>
    );
  }

  const c = colorMap[color] || colorMap.cyan;
  const isLarge = size === "large";
  const content = (
    <>
      {isLarge && image && <img className="project-image" src={image} alt="" />}

      <div className="project-card-top">
        <span className="project-number">{String(id).padStart(3, "0")}</span>
        <span className="project-state">已上线</span>
      </div>

      <div className="project-card-body">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>

      <div className="project-card-foot">
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx}>
              {tag}
            </span>
          ))}
        </div>
        <span className="visit-cue" aria-hidden="true">↗</span>
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-card project-card-live ${c.className} ${isLarge ? "project-card-large" : ""}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`project-card project-card-live ${c.className} ${isLarge ? "project-card-large" : ""}`}>
      {content}
    </article>
  );
}

export default Card;
