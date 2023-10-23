
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import Logo from "assets/icons/logo.svg";
// import LogoWhite from "assets/icons/logowhite.svg";

import { ReactComponent as Hamburger } from "assets/icons/hamburger.svg";
import { ReactComponent as Exit } from "assets/icons/exit.svg";

const NavItem = ({ href, label, setIsMobileNavOpen }) => {
  const router = useLocation();

  const checkIfActive = () => {
    if (href === '/') {
      return router.pathname === '/' && router.asPath === '/';
    }
    return router?.asPath?.toLowerCase() === href.toLowerCase();
  };

  const isActive = checkIfActive();

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false); // close mobile nav when a menu item is clicked
  };

  const activeclassname = isActive ? 'active' : '';

  return (
    <li className={`nav-item ${activeclassname}`}>
      <a href={href}
        className="nav-link"
        activeclassname="active"
        onClick={handleMobileNavClose}
      >
        {label}
      </a>
    </li>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden justify-between py-[43px]  items-center mx-auto  xl:flex ">
      <a href="/">
      <img alt="logo" className="inline" src={Logo} width={158.6} height={53.95}/>
      </a>
      <div className="flex text-mayhaven-blue  gap-x-[48px] text-[16px]font-[400]">
        <NavItem href="/#about" label="About Us" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/blog" label="Blog" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/#events" label="Our Services" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/#programs" label="Projects & Programs" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/#gallery" label="Gallery" setIsMobileNavOpen={() => {}}/>

      </div>

    </div>
  );
};

const MobileNav = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  const handleMobileNavClose = () => {
    setMobileNavIsOpen(false); 
  };
  return(
    <div className={`xl:hidden ${mobileNavIsOpen && "bg-mayhaven-brown h-[100vh] fixed top-0 left-0 w-[100%] overflow-auto z-20"} w-[100%]   px-[30px] py-[50px]`}>
      {
        mobileNavIsOpen ? (
          <>
            <div className=" flex justify-end mb-[38px] items-center">
            {/* <a href="/">
            <img alt="menu" className="inline" src={LogoWhite} />
            </a> */}
              <Exit className="w-[15px] h-[15px]" onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
            </div>
             <div className="flex text-white flex-col gap-[48px] pt-[50px]">
                <NavItem href="/#about" label="About Us" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="/blog" label="Blog" setIsMobileNavOpen={() => {}}/>
                <NavItem href="/#events" label="Our Services" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="/#programs" label="Projects & Programs" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="/#gallery" label="Gallery" setIsMobileNavOpen={handleMobileNavClose}/>
             </div>
             
          </>
        ) : (
          <div className="flex justify-between items-center max-h-[64px]">
              <a href="/">
              <img alt="logo" className="inline" src={Logo} width={158.6} height={53.95}/>
              </a>
              <Hamburger width={30} height={30}  onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
          </div>        
        )
      }
    
  </div>
  )
}


const Navbar = () => {

  return (
      <div
        className="w-full max-w-[1200px] mx-auto"
      >
          <DesktopNavbar />
          <MobileNav />
      </div>
  );
};

export default Navbar;