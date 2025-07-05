import Title from "../../General Components/Title";
import ExperienceList from "./ExperienceList";
import Spacer from '../../Spacer'

const ExperienceSection = () => {
  return (
    <div>
      <Title text={"Ervaring"} pos={"C"} white={true} />
      <ExperienceList />
      <Spacer black={true} />
    </div>
  )
}

export default ExperienceSection;