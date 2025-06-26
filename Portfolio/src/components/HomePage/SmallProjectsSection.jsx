import Title from "../General Components/Title";
import XSpacer from "../XSpacer";
import Spacer from "../Spacer";
import ProjectList from '../Projects/ProjectList'

const SmallProjectsSection = () => {
  return (
    <>
      <Spacer black={true} />
      <section className="bg-[#333333] flex flex-col md:flex-row">
        <XSpacer big={true} black={true} />
        <Title white={true} pos={"L"} text="Projecten" />
        <ProjectList duo={true}/>
      </section>
    </>
  );
};

export default SmallProjectsSection;