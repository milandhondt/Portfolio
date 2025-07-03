import CustomButton from "../General Components/CustomButton";

const Project = ({ titel, beschrijving, foto, link, code }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-2xl p-6 max-w-lg flex flex-col items-center">
      <p className="text-3xl font-bold">{titel}</p>

      <p className="text-xl my-5 text-center">
        {beschrijving}
      </p>

      <img src={foto} alt={`Screenshot van de homepagina van ${titel}`} className="rounded-2xl border" />

      {link ? (
        <CustomButton text="Bezoek de site" isCVButton={false} to={link} />
      ) : (
        <p className="my-5 text-2xl mt-10">Dit project staat niet online</p>
      )}

      {code ? (
        <CustomButton text="Bekijk de code" isCVButton={false} to={code} />
      ) : (
        <p className="my-5 text-2xl">De code van dit project is niet openbaar</p>
      )}
    </div>
  );
};

export default Project;
