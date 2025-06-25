const Spacer = ({ black, big }) => {
  return (
    <div className={`${big ? "h-60" : "h-10"} ${black ? "bg-[#333333]" : "bg-[#F2F2F2]"}`} />
  );
};

export default Spacer;
