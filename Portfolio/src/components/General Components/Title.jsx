const Title = ({ text, onLeft, white, pos }) => {

  const alignment =
    pos === "C" ? "text-center" :
      pos === "R" ? "text-right" :
        "text-left";

  return (
    <h1
      className={`text-5xl mx-5 mb-2 pt-5 ${alignment} ${onLeft ? "ml-5" : "mr-5"} ${white ? "text-[#F2F2F2]" : "text-[#333333]"} font-bold`}
    >
      {text}
    </h1>
  );
};

export default Title;
