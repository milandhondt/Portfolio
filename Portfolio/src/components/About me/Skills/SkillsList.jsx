import Skill from './Skill';

const SkillsList = ({ skills }) => {
  return (
    <div className='flex flex-wrap p-5 pt-2'>
      {skills.map((s) => (
        <Skill key={s} naam={s} />
      ))}
    </div>
  );
};


export default SkillsList;