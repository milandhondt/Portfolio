const CurrentProject = ({ title, text }) => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-5 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Huidig project</h1>
      <p className="text-lg sm:text-xl lg:text-2xl">
        Momenteel werk ik aan <b>{title}</b>. {text} Zodra de applicatie klaar is, zal de repository beschikbaar zijn op&nbsp;
        <a href="https://github.com/milandhondt" className="underline">mijn GitHub</a>.
      </p>
    </div>
  )
}

export default CurrentProject;