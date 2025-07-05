import education from '../../../api/education.json';
import Education from './Education';

const experiencelist = education;

const ExperienceList = () => {
  return (
    <div className="max-w-2xl my-5 -mb-6 mx-auto px-4">
      {
        experiencelist.map((e) => (
          <Education
            key={e.id}
            titel={e.titel}
            school={e.school}
            datum={e.datum}
            beschrijving={e.beschrijving}
          />
        ))
      }
    </div>
  );
};

export default ExperienceList;
