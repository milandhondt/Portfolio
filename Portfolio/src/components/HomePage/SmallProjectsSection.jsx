import Title from "../General Components/Title";
import XSpacer from "../XSpacer";
import Spacer from "../Spacer";

const SmallProjectsSection = () => {
  return (
    <>
      <Spacer black={true} />
      <section className="bg-[#333333] flex flex-col md:flex-row">
        <XSpacer big={true} black={true} />
        <Title white={true} pos={"L"} text="Projecten" />
      </section>
    </>
  );
};

export default SmallProjectsSection;