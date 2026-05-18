import CustomButton from "../General Components/CustomButton";

const Wish = ({ name, url, img, description, price }) => {
  return (
    <article className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 flex-1 w-full">
        <img
          src={`./${img}`}
          alt={`Foto van ${name}`}
          className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg flex-shrink-0 mx-auto md:mx-0"
        />

        <div className="flex-1 w-full">
          <h3 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
            {name}
          </h3>
          <p className="text-sm text-gray-300 mt-1 text-center md:text-left">
            {description}
          </p>
          <div className="mt-2 text-center md:text-left">
            <span className="text-lg font-bold text-gray-100">€{price}</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-3 md:mt-0">
        <CustomButton
          to={url}
          text={"Bekijk dit product/artikel"}
          className="w-full md:w-auto"
        />
      </div>
    </article>
  );
};

export default Wish;
