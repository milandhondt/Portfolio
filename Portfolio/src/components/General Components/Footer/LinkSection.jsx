import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const LinkSection = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FaPhone />
        <a href="tel:+32478410722" className="hover:underline">+32 478 41 07 22</a>
      </div>

      <div className="flex items-center gap-2">
        <FaEnvelope />
        <a href="mailto:dhondt.milan@protonmail.com" className="hover:underline">dhondt.milan@protonmail.com</a>
      </div>

      <div className="flex items-center gap-2">
        <FaLinkedin />
        <a href="https://www.linkedin.com/in/milan-dhondt/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          @milan-dhondt
        </a>
      </div>

      <div className="flex items-center gap-2">
        <FaGithub />
        <a href="https://github.com/milandhondt" target="_blank" rel="noopener noreferrer" className="hover:underline">
          @milandhondt
        </a>
      </div>
    </div>
  );
};

export default LinkSection;
