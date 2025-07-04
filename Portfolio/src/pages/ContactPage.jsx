import ContactForm from "../components/Contact/ContactForm";
import Spacer from '../components/Spacer'
import ContactGegevensTile from "../components/Contact/ContactGegevensTile";

const ContactPage = () => {
  return (
    <div className="bg-[#333333]">
      <Spacer black={true} />
      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-12 lg:min-h-[500px]">
        <div className="flex-1 flex">
          <ContactGegevensTile />
        </div>
        <div className="flex-1 flex">
          <ContactForm />
        </div>
      </div>

      <Spacer black={true} />
    </div>
  )
}

export default ContactPage;