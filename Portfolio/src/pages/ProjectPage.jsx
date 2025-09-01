import ProjectList from "../components/Projects/ProjectList";
import CurrentProject from "../components/Projects/CurrentProject";

const ProjectPage = () => {
  return (
    <>
      <CurrentProject title={'Outfitter'} text={'Een webapplicatie gebouwd met React, Auth0 en Express. Met Outfitter kan je je eigen kleerkast beheren, outfits delen met vrienden en inspiratie opdoen bij anderen.'} />
      <div className="bg-[#333333]">
        <ProjectList duo={false} />
      </div>
    </>
  )
}
export default ProjectPage;