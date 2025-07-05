import Spacer from "../Spacer";
import Title from "../General Components/Title";

const AboutDebutSection = () => {
  return (
    <>
      <section className="bg-[#333333] flex flex-col items-center justify-center text-center px-6">
        <img
          src="/fotoTitanic.jpg"
          className="rounded-full h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 object-cover shadow-lg mb-6"
          alt="Portretfoto van Milan Dhondt"
        />
        <Title text={"Hallo, ik ben Milan Dhondt"} pos={"C"} white={true} />
        <p className="text-xl text-white mt-3 max-w-xl">
          Ik ben een 21-jarige student Toegepaste Informatica aan HOGENT. Tijdens mijn opleiding heb ik een sterke interesse ontwikkeld in zowel frontend als backend development. Ik werk graag in teamverband, omdat ik de verschillende input van mensen enorm leuk en interessant vind.
        </p>
      </section>
      <Spacer big={false} black={true} />
    </>
  );
};

export default AboutDebutSection;
