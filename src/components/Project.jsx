const Project = ({ project }) => {
  return (
    <div id={project.id}>
      <img src={project.img} alt={project.alt} className={project.imageClass} />
      <div className="project-link">
        <a href={project.url}>{project.name}</a>
      </div>
    </div>
  );
};
export default Project;
