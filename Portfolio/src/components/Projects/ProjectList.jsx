import Project from "./Project";
import projects from "../../api/projects.json";
import { Link } from "react-router-dom";

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

      {duo && (
        <div className="text-white text-center mt-10 text-2xl">
          <p>
            Bekijk mijn <Link to={"/projects"} className="underline">
              projecten pagina
            </Link>            om al mijn huidige projecten te bekijken!

          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectList;
