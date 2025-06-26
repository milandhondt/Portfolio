import Title from "../General Components/Title";
import CustomButton from "../General Components/CustomButton";
import Spacer from "../Spacer";
import XSpacer from "../XSpacer";


const IntroductionSection = () => {
  return (
    <>
      <section className="bg-[#333333] flex flex-col md:flex-row items-center justify-center gap-10">
        <XSpacer black={true} />
        <img
          src="/headshot.jpg"
          className="rounded-full h-[360px] w-[360px] object-cover shadow-lg"
          alt="Portretfoto van Milan Dhondt"
        />
        <div>
          <Title onLeft={false} white={true} pos={"L"} text="Milan Dhondt - Full stack developer" />
          <p className="mt-4 text-4xl text-[#F2F2F2] mr-5">
            Ik ben Milan, en momenteel studeer ik Toegepaste Informatica aan HOGENT, met een specialisatie in Mobile en Enterprise Development.
            Moest je vragen hebben of willen samenwerken, dan hoor ik het graag!
          </p>
          <CustomButton to={"/contact"} text={"Neem contact op"} />
        </div>
      </section>
      <Spacer big={false} black={true} />
    </>
  );
};

export default IntroductionSection;
