import { Link } from "react-router-dom";
import Title from "../General Components/Title";

const IntroductionSection = () => {
  return (
    <section className="my-70 flex flex-col md:flex-row items-center justify-center gap-10">
      <img
        src="/headshot.jpg"
        className="rounded-full h-[360px] w-[360px] object-cover shadow-lg"
        alt="Portretfoto van Milan Dhondt"
      />
      <div className="text-center md:text-left max-w-xl">
        <Title onLeft={false} text="Full stack developer" />
        <p className="mt-4 text-gray-700 mr-5">
          Ik ben Milan, en momenteel studeer ik Toegepaste Informatica aan HoGent, met een specialisatie in Mobile en Enterprise Development.
          Moest je vragen hebben of willen samenwerken, dan hoor ik het graag!
        </p>
        <Link to="/contact">
          <button className="mt-6 cursor-pointer bg-[#5F0077] text-white hover:bg-[#7A1499] transition-colors px-6 py-2 rounded-full shadow-md">
            Neem contact op
          </button>
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
