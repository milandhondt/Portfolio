import { GiGraduateCap } from "react-icons/gi";

const Education = ({ titel, school, datum, beschrijving }) => {
  return (
    <div className="bg-[#333333] text-white rounded-xl p-6 mb-6 shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <GiGraduateCap className="text-2xl fill-[#5F0077] stroke-white stroke-6" />
        <h3 className="text-white text-2xl font-semibold">{titel}</h3>
      </div>
      <p className="text-lg mb-2">
        {school} &middot; {datum}
      </p>
      <p>
        {beschrijving}
      </p>
    </div>
  );
};

export default Education;
