import { Link } from 'react-router-dom';

const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#F2F2F2] rounded-full shadow-md items-center justify-between px-8 py-4 z-50">
      <Link to="/" className="flex-shrink-0">
        <img
          src="/logoRondZB.png"
          alt="Logo"
          className="w-20 h-20 object-contain border-1 border-[#5F0077] rounded-full"
        />
      </Link>

      <div className="flex-1 flex justify-center space-x-10 text-[#333333] font-medium text-lg">
        <Link to="/" className="hover:text-[#5F0077] transition">Home</Link>
        <Link to="/about" className="hover:text-[#5F0077] transition">About</Link>
        <Link to="/projects" className="hover:text-[#5F0077] transition">Projects</Link>
      </div>

      <Link
        to="/contact"
        className="bg-[#5F0077] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#7A1499] transition whitespace-nowrap"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavbarDesktop;
