const jaar = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F2F2] py-4 shadow-md mt-auto">
      <div className="container mx-auto px-4 text-center">
        &copy; {jaar} Milan Dhondt - Alle rechten voorbehouden
      </div>
    </footer>
  )
}

export default Footer;