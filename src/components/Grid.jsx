import Card from "./Card";

function Grid({ projects }) {
  return (
    <div id="archive" className="project-grid">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Grid;
