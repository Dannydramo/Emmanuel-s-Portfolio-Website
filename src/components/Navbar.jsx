import Logo from "../assets/A.E.png";
import OpenMenu from "../assets/icon-menu.svg";
import Close from "../assets/icon-close.svg";
import React, { useState, useEffect } from 'react';
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [navShadow, setNavShadow] = useState('')

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setNavbarBackground('#fff'); 
      setNavShadow('0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)')
    } else {
      setNavbarBackground('transparent'); 
      setNavShadow('')
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <div className="fixed left-[0] h-[10%] w-full flex items-center" style={{ backgroundColor: navbarBackground, boxShadow:navShadow }}>
     <div className="container">
      <nav className="flex items-start sm:items-center justify-between py-5">
        <img src={Logo} alt="Logo" />

        <img
          src={open ? Close : OpenMenu}
          className="z-20 sm:hidden"
          onClick={() => setOpen(!open)}
        />

        <div
          className={`flex flex-col text-redCyan sm:justify-between sm:items-center  sm:flex-row sm:space-x-8 bg-bgCol sm:bg-transparent space-y-5 sm:space-y-0 sm:static fixed top-0 sm:h-auto h-screen w-screen duration-500 ease-linear sm:w-auto px-11 py-12 sm:py-0 sm:px-0 ${
            !open ? "top-[-100%]" : "top-0"
          }`}
        >
        
         <ul className="space-x-0 mt-12 space-y-4 sm:flex sm:space-x-[5rem] text-lg sm:space-y-0 sm:mt-0 absolute top-20 right-[15%] sm:relative sm:top-0 text-lg lg:text-xl bg-white w-[80%] mx-auto py-8 sm:bg-transparent rounded-2xl shadow-xl sm:shadow-none">
            <li className="text-center">Home</li>
            <li className="text-center">About</li>
            <li className="text-center">Portfolio</li>
            <li className="text-center">Contact</li>
          </ul>
         
        </div>
      </nav>
    </div>
   </div>
  );
};

export default Navbar;
