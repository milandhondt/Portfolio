import TextSection from '../components/About me/TextSection'
import SkillsSection from '../components/About me/Skills/SkillsSection'
import ExperienceSection from '../components/About me/Experience/ExperienceSection'
import EducationSection from '../components/About me/Education/EducationSection'
import ContactSection from '../components/About me/ContactSection'

const AboutPage = () => {
  return (
    <div className='bg-[#333333]'>
      <p className="bg-[#F2F2F2]">Hier komt een leuke foto met klein beetje info</p>
      <TextSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
export default AboutPage;