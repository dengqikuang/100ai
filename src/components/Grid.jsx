import Card from "./Card";

function Grid({ projects }) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-10 gap-cell-gap">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Grid;
