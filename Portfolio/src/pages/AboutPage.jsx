import SkillsSection from '../components/About me/Skills/SkillsSection'
import ExperienceSection from '../components/About me/Experience/ExperienceSection'
import EducationSection from '../components/About me/Education/EducationSection'
import ContactSection from '../components/About me/ContactSection'
import AboutDebutSection from '../components/About me/AboutDebutSection'


const AboutPage = () => {
  return (
    <div className='bg-[#333333]'>
      <AboutDebutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
export default AboutPage;