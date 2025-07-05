import experiences from '../../../api/experience.json';
import Experience from './Experience';

const experiencelist = experiences;

const ExperienceList = () => {
  return (
    <div className="max-w-2xl my-5 mx-auto px-4">
      {
        experiencelist.map((e) => (
          <Experience
            key={e.id}
            titel={e.titel}
            bedrijf={e.bedrijf}
            datum={e.datum}
            beschrijving={e.beschrijving}
          />
        ))
      }
    </div>
  );
};

export default ExperienceList;
