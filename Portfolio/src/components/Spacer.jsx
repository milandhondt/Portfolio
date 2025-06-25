const Spacer = ({ black, big }) => {
  return (
    <div className={`${big ? "h-50" : "h-15"} ${black ? "bg-[#333333]" : "bg-[#F2F2F2]"}`} />
  );
};

export default Spacer;
