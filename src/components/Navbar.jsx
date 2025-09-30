import { useEffect, useState } from "react";
import NobiLogo from "/images/logo.png";
import NLogo from "/images/N_Logo.png";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent backdrop-blur-md fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "py-1" : "py-3"
      }`}
    >
      <div className="mx-5 px-4 py-2 relative flex justify-between items-center">
        <div className={` ${isScrolled ? 'h-10' : 'h-16'} w-16 perspective-1000`}>
          <div className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
            isScrolled ? "rotate-y-180" : "rotate-y-0"
          }`}>
            <img
              src={NobiLogo}
              alt="Nobi Logo"
              className="absolute w-full h-full object-contain backface-hidden rotate-y-0"
            />
            <img
              src={NLogo}
              alt="N Logo"
              className="absolute w-full h-full object-contain backface-hidden rotate-y-180"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-28 text-blue font-medium">
          <li>
            <a href="#home" className="hover:text-brand">Home</a>
          </li>
          <li className="group cursor-pointer"  onMouseEnter={()=>setIsDropdownOpen(true)} onMouseLeave={()=>setIsDropdownOpen(false)}>
            <span className="hover:text-brand flex items-center">Business&nbsp; {isDropdownOpen ? < FaAngleUp/> : <FaAngleDown />}</span>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 fixed left-0 top-full w-screen bg-white shadow-lg z-50">
             <div className="max-w-9xl grid grid-cols-3 p-6 text-center">
              <a href="#business-development" className="hover:text-brand py-2">Business Development</a>
              <a href="#branding-solutions" className="hover:text-brand py-2">Branding Solutions</a>
              <a href="#digital-marketing" className="hover:text-brand py-2">Digital Marketing</a>
              <a href="#event-management" className="hover:text-brand py-2">Event Management</a>
              <a href="#interior-design-&-fabrication" className="hover:text-brand py-2">Interior Design & Fabrication</a>
            </div>
            </div>
          </li>
          <li>
            <a href="#about" className="hover:text-brand">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width={24}
            height={24}
            fill={menuOpen ? "blue" : "black"}
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>

          {menuOpen && (
            <div className="flex flex-col rounded-b-xl shadow-xl items-start justify-start fixed top-12 right-0 w-full bg-white shadow-lg p-4 rounded-md gap-4">
              <a href="#home" className="w-full py-2 px-3 rounded hover:bg-blue-50 transition">Home</a>
            {/* Business with dropdown */}
              <div className="w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  }}
                  className="flex justify-between items-center w-full"
                >
                  <span>Business</span>
                  {isMobileDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {isMobileDropdownOpen && (
                  <div className="mt-2 flex flex-col gap-2">
                    <a href="#business-development" className="hover:text-brand pl-4 w-full py-2 px-3 rounded hover:bg-blue-50 transition">Business Development</a>
                    <a href="#branding-solutions" className="hover:text-brand pl-4 w-full py-2 px-3 rounded hover:bg-blue-50 transitio">Branding Solutions</a>
                    <a href="#digital-marketing" className="hover:text-brand pl-4 w-full py-2 px-3 rounded hover:bg-blue-50 transitio">Digital Marketing</a>
                    <a href="#event-management" className="hover:text-brand pl-4 w-full py-2 px-3 rounded hover:bg-blue-50 transitio">Event Management</a>
                    <a href="#interior-design-&-fabrication" className="hover:text-brand pl-4 w-full py-2 px-3 rounded hover:bg-blue-50 transitio">Interior Design & Fabrication</a>
                  </div>
                )}
              </div>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
