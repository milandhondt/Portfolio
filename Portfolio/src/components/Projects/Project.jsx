import CustomButton from "../General Components/CustomButton";

const Project = ({ titel, beschrijving, foto, link, code }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col items-center">
      <p className="text-xl font-semibold mb-4">{titel}</p>

      <p className="text-center text-sm text-gray-700 mb-4">
        {beschrijving}
      </p>

      <div className="w-full h-40 bg-white border border-black rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        {foto && <img src={foto} alt={titel} className="h-full object-contain" />}
      </div>

      {link ? (
        <CustomButton text="Bezoek de site" isCVButton={false} to={link} />
      ) : (
        <p className="text-sm text-gray-500 mt-2">Dit project staat niet online</p>
      )}

      {code ? (
        <div className="mt-2">
          <CustomButton text="Bekijk de code" isCVButton={false} to={code} />
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-2">De code van dit project is niet openbaar</p>
      )}
    </div>
  );
};

export default Project;
