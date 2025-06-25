import CustomButton from "../General Components/CustomButton";
import Title from "../General Components/Title";
import Spacer from "../../components/Spacer";

const CVSection = () => {
  return (
    <section className="bg-[#F2F2F2]">
      <Spacer black={false} big={false} />
      <Title white={false} pos={"C"} text={"Curriculum Vitae"} />
      <CustomButton isCVButton={true} />
      <Spacer black={false} big={false} />
    </section>
  )
}

export default CVSection;