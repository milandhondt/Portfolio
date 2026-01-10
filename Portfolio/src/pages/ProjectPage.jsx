import ProjectList from "../components/Projects/ProjectList";
import CurrentProject from "../components/Projects/CurrentProject";

const ProjectPage = () => {
  return (
    <>
      <CurrentProject title={'een website voor een studentenvereniging'} text={'Deze website wordt van scratch gebouwd met React en good old plain CSS. Deze website zal dienen als informatiebron, maar ook als ledenportaal met role based access en volledig andere functionaliteiten op basis van de positie van de gebruiker binnen de club.'} />
      <div className="bg-[#333333]">
        <ProjectList duo={false} />
      </div>
    </>
  )
}
export default ProjectPage;