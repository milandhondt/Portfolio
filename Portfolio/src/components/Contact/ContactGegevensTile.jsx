import LinkSectionContact from "../Contact/LinkSectionContact";
import Title from '../General Components/Title';

const ContactGegevensTile = () => {
  return (
    <div className="bg-[#F2F2F2] border border-gray-200 rounded-3xl shadow-lg p-8 lg:p-12 w-full h-full flex flex-col justify-between">
      <div>
        <Title text={"Mijn gegevens"} pos={"C"} />
        <LinkSectionContact />
      </div>
    </div>
  );
};

export default ContactGegevensTile;
