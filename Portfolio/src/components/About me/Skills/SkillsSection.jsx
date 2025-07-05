import Title from "../../General Components/Title";
import SkillsCard from "./SkillsCard";
import skills from '../../../api/skills.json';
import Spacer from '../../Spacer';

const skillset = skills;

const SkillsSection = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Title text={"Skills"} pos={"C"} />
      {
        skillset.map((set) => (
          <SkillsCard key={set.id} type={set.type} skills={set.skills} />
        ))
      }
      <Spacer />
    </div>
  )
}

export default SkillsSection;