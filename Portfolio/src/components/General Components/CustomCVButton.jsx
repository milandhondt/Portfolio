const CustomCVButton = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="mt-6 text-xl px-17 py-4 cursor-pointer bg-[#5F0077] text-white hover:bg-[#7A1499] transition-colors px-6 py-2 rounded-full shadow-md flex items-center gap-2"
      >
        Download mijn CV
      </button>
    </div>
  );
};

export default CustomCVButton;