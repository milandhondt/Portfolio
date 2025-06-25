const XSpacer = ({ black, big }) => {
  return (
    <div className={`${big ? "w-15" : "w-8"} ${black ? "bg-[#333333]" : "bg-[#F2F2F2]"}`} />
  );
};

export default XSpacer;
