import { Link } from "react-router-dom";
import CustomCVButton from "./CustomCVButton";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV_Dhondt_Milan.pdf";
  link.download = "CV_Dhondt_Milan.pdf";
  link.click();
};

const CustomButton = ({ to, text, isCVButton }) => {

  if (isCVButton) {
    return (
      <CustomCVButton onClick={downloadCV} />
    );
  }

  return (
    <Link to={to}>
      <button className={"mt-6 cursor-pointer bg-[#5F0077] text-white hover:bg-[#7A1499] transition-colors px-6 py-2 rounded-full shadow-md flex items-center gap-2"}>
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
