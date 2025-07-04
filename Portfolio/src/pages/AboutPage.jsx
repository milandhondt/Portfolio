import TextSection from '../components/About me/TextSection'
import SkillsSection from '../components/About me/Skills/SkillsSection'
import ExperienceSection from '../components/About me/Experience/ExperienceSection'
import EducationSection from '../components/About me/Education/EducationSection'
import HobbySection from '../components/About me/Hobbies/HobbySection'
import ContactSection from '../components/About me/ContactSection'

const AboutPage = () => {
  return (
    <div>
      <p>Hier komt een leuke foto met klein beetje info</p>
      <TextSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <HobbySection />
      <ContactSection />
    </div>
  )
}
export default AboutPage;