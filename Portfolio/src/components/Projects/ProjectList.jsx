import Project from "./Project";
import projects from "../../api/projects.json";

const ProjectList = ({ duo }) => {
  const shownProjects = duo ? projects.slice(0, 2) : projects;

  return (
    <section className="py-12 px-4">

      <div className="flex flex-wrap justify-center gap-8">
        {shownProjects.map((p, index) => (
          <Project
            key={index}
            titel={p.titel}
            beschrijving={p.beschrijving}
            foto={p.foto}
            link={p.link}
            code={p.code}
          />
        ))}
      </div>

      {!duo && (
        <p className="text-center mt-12 text-lg">
          Bekijk mijn projecten pagina om al mijn huidige projecten te bekijken!
        </p>
      )}
    </section>
  );
};

export default ProjectList;
