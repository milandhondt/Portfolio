import { FaBriefcase } from "react-icons/fa6";

const Experience = ({ titel, bedrijf, datum, beschrijving }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-xl p-6 mb-6 shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <FaBriefcase className="text-xl fill-[#5F0077]" />
        <h3 className="text-black text-2xl font-semibold">{titel}</h3>
      </div>
      <p className="text-lg mb-2">
        {bedrijf} &middot; {datum}
      </p>
      <p>
        {beschrijving}
      </p>
    </div>
  );
};

export default Experience;
