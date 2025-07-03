import Title from "../General Components/Title";
import CustomButton from "../General Components/CustomButton";
import Spacer from "../Spacer";
import XSpacer from "../XSpacer";

const IntroductionSection = () => {
  return (
    <>
      <section className="bg-[#333333] flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-6">
        <XSpacer black={true} />
        <img
          src="/headshot.jpg"
          className="rounded-full h-60 w-60 sm:h-72 sm:w-72 md:h-[360px] md:w-[360px] object-cover shadow-lg"
          alt="Portretfoto van Milan Dhondt"
        />
        <div className="text-center md:text-left max-w-xl">
          <Title onLeft={false} white={true} pos={"L"} text="Milan Dhondt - Full stack developer" />
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#F2F2F2] mx-0">
            Ik ben Milan, en momenteel studeer ik Toegepaste Informatica aan HOGENT, met een specialisatie in Mobile en Enterprise Development.
            Moest je vragen hebben of willen samenwerken, dan hoor ik het graag!
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <CustomButton to={"/contact"} text={"Neem contact op"} />
          </div>
        </div>
      </section>
      <Spacer big={false} black={true} />
    </>
  );
};

export default IntroductionSection;
