import LinkSection from "./LinkSection";

const BigFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-8 max-w-7xl mx-auto px-4">
      <img
        src="/logoRondZB.png"
        alt="Logo"
        className="w-32 h-32 object-contain border border-[#5F0077] rounded-full"
      />
      <div className="md:ml-auto md:mr-0 mt-6 md:mt-0">
        <LinkSection />
      </div>
    </div>
  );
};

export default BigFooter;
