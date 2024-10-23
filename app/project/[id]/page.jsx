import ProjectDetails from "@/app/Components/Projects/ProjectDetails";
import projectsData from "@/app/data/ProjectsData";

const ProjectDetailsPage = ({params}) => {
  const id=+params.id
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetails projectData={project} />
    </div>
  );
};

export default ProjectDetailsPage;
