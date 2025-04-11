import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`md:hidden fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#F2F2F2] shadow-md z-50 ${menuOpen ? 'rounded-3xl' : 'rounded-full'
      }`}>
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src="/logoRondZB.png"
            alt="Logo"
            className="w-16 h-16 object-contain rounded-full border-1 border-[#5F0077]"
          />

        </Link>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-[#333333] hover:text-[#5F0077] transition p-2"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="pb-6 px-6">
          <div className="flex flex-col items-center space-y-5 text-[#333333] font-medium text-lg">
            <Link
              to="/"
              className="w-full text-center hover:text-[#5F0077] transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="w-full text-center hover:text-[#5F0077] transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="w-full text-center hover:text-[#5F0077] transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="w-full bg-[#5F0077] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#7A1499] transition text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;