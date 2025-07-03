import LinkSection from "./LinkSection";

const BigFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-8 max-w-7xl">
      <img
        src="/logoRondZB.png"
        alt="Logo"
        className="w-32 h-32 object-contain border border-[#5F0077] rounded-full"
      />
      <LinkSection />
    </div>
  );
};

export default BigFooter;
