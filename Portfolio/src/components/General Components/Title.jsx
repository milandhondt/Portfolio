const Title = ({ text, onLeft, white }) => {
  return (
    <h1 className={`text-4xl mb-2 pt-5 ${onLeft ? "ml-5" : "mr-5"} ${white ? "text-[#F2F2F2]" : "text-[#333333]"}`}>{text}</h1>
  )
}

export default Title;