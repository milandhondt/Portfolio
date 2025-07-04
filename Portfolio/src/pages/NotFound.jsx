import { useNavigate } from "react-router-dom"
import { FaHouse, FaEnvelope, FaMagnifyingGlass } from "react-icons/fa6"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#333333] min-h-screen py-25 pb-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-8">
          {/* 404 Titel */}
          <div className="space-y-4">
            <div className="text-8xl font-bold text-white">404</div>
            <h1 className="text-4xl font-bold text-white">Pagina niet gevonden</h1>
            <p className="text-lg text-white max-w-md mx-auto">
              Sorry, deze pagina bestaat niet of is verplaatst.
            </p>
          </div>

          <div className="bg-white border-t rounded-2xl shadow p-8 text-left">
            <h2 className="text-xl text-center font-semibold text-gray-900 mb-6">
              Welke pagina wil je bekijken?
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center justify-center space-x-2 h-12 px-4 rounded-md bg-[#5F0077] cursor-pointer text-white font-medium hover:bg-[#7A1499] transition"
              >
                <FaHouse className="h-4 w-4" />
                <span>Homepagina</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => navigate("/projects")}
                  className="flex items-center justify-center space-x-2 h-12 px-4 rounded-md cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FaMagnifyingGlass className="h-4 w-4" />
                  <span>Mijn projecten</span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center justify-center space-x-2 h-12 px-4 rounded-md cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  <FaEnvelope className="h-4 w-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
