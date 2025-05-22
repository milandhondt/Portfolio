import { Link } from "react-router-dom"
import Title from "../General Components/Title";

const IntroductionSection = () => {
  return (
    <div className="mt-40">
      <div>
        <img src="/headshot.jpg" className="rounded-full" />
      </div>
      <div className="text-right mr-5">
        <Title onLeft={false} text={"Full stack developer"} />
        <p>Ik ben Milan, en momenteel studeer ik Toegepaste Informatica aan Hogent, met een specialisatie in Mobile en Enterprise development. Moest je vragen hebben of willen samenwerken, dan hoor ik het graag!</p>
        <Link to={"/contact"}>
          <button className=" mt-5 border-1 rounded-full p-3">Neem contact op</button>
        </Link>
      </div>
    </div>
  )
}

export default IntroductionSection;