const LinkItem = ({ icon, link, text }) => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-[#5F0077] text-xl">
        {icon}
      </div>
      <a href={`${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base hover:underline break-all">
        {text}
      </a>
    </div>
  )
}

export default LinkItem;