import SkillsList from "./SkillsList";

const SkillsCard = ({ type, skills }) => {
  return (
    <div className="bg-[#333333] mt-6 mx-6 rounded-2xl shadow-md overflow-hidden">
      <h1 className="text-2xl mb-5 px-6 py-4 border-b border-[#444] text-white font-semibold">
        {type}
      </h1>
      <SkillsList skills={skills} />
    </div>
  );
};


export default SkillsCard;