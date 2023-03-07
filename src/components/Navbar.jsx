import Logo from "../assets/A.E.png";
import OpenMenu from "../assets/icon-menu.svg";
import Close from "../assets/icon-close.svg";
import React, { useState, useEffect } from 'react';
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setNavbarBackground('#fff'); 
    } else {
      setNavbarBackground('transparent'); 
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <div className="fixed left-[0] h-[10%] w-full flex items-center" style={{ backgroundColor: navbarBackground }}>
     <div className="container">
      <nav className="flex items-start sm:items-center justify-between py-5">
        <img src={Logo} alt="Logo" />

        <img
          src={open ? Close : OpenMenu}
          className="z-20 sm:hidden"
          onClick={() => setOpen(!open)}
        />

        <div
          className={`flex flex-col text-redCyan sm:justify-between items-center  sm:flex-row sm:space-x-8 bg-bgCol sm:bg-transparent space-y-5 sm:space-y-0 sm:static fixed top-0 sm:h-auto h-screen w-screen duration-500 ease-linear sm:w-auto px-11 py-12 sm:py-0 sm:px-0 ${
            !open ? "right-[-100%]" : "right-0"
          }`}
        >
          <ul className="space-x-0 mt-12 space-y-4 sm:flex sm:space-x-[5rem] text-lg sm:space-y-0 sm:mt-0">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
   </div>
  );
};

export default Navbar;
