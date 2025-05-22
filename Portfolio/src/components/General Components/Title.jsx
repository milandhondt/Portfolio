const Title = ({ text, onLeft }) => {
  return (
    <h1 className={`text-4xl mb-2 pt-5 ${onLeft ? "ml-5" : "mr-5"}`}>{text}</h1>
  )
}

export default Title;