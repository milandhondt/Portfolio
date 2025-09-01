const CurrentProject = ({ title, text }) => {
  return (
    <div className="p-15 py-5 m-15 text-center">
      <h1 className="text-5xl font-bold mb-8">Huidig project</h1>
      <p className="text-2xl">
        Momenteel werk ik aan <b>{title}</b>. {text} Zodra de applicatie klaar is, zal de repository beschikbaar zijn op&nbsp;
        <a href="https://github.com/milandhondt" className="underline">mijn GitHub</a>.
      </p>
    </div>
  )
}

export default CurrentProject;
