import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";
import LinkItem from "../Contact/LinkItem";

const LinkSectionContact = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">

      <LinkItem icon={<FaPhone />} link={"tel:+32478410722"} text={"+32 478 41 07 22"} />

      <LinkItem icon={<FaEnvelope />} link={"mailto:dhondt.milan@protonmail.com"} text={"dhondt.milan@protonmail.com"} />

      <LinkItem icon={<FaLinkedin />} link={"https://www.linkedin.com/in/milan-dhondt/"} text={"@milan-dhondt"} />

      <LinkItem icon={<FaGithub />} link={"https://github.com/milandhondt"} text={"@milandhondt"} />

    </div>
  );
};

export default LinkSectionContact;
