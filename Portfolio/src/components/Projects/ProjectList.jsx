const ProjectList = ({ duo }) => {
  return (
    <div>
      {
        duo ? (
          <div>Hier komen 2 projecten</div>
        ) : (
          <div>
            Hier komen meer dan 2 projecten
          </div>
        )
      }
    </div>
  )
}

export default ProjectList;