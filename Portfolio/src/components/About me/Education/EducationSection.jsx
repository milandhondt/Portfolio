import Title from "../../General Components/Title";
import EducationList from './EducationList'
import Spacer from '../../Spacer'

const EducationSection = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Title text={"School"} pos={"C"} white={false} />
      <EducationList />
      <Spacer />
    </div>
  )
}

export default EducationSection;