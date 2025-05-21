const IntroductionSection = ({ isMobile }) => {
  return (
    isMobile ? (
      <div>
        <h1 className="text-xl">Ik ben mobile</h1>
      </div>
    )

      :

      (
        <div>
          <h1 className="text-xl">Ik ben desktop</h1>
        </div>
      ))
}

export default IntroductionSection;