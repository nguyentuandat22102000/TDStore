import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Slogan from "../slogan/Slogan";

const Header = () => {
  
  const scrollHeader = () => {
    window.addEventListener("scroll", function (event) {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  };
  const [openMenu, setOpenMenu] = useState(false);    
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    const headerMenu = document.querySelector("#header__menu");
    headerMenu.classList.toggle('display__block');
    };

  scrollHeader();
  return (
    <header className="w-full h-[100px] sm:px-2 sm:relative flex items-center lg:fixed lg:top-0 lg:left-0 bg-transparent">
      <div className="container__wide">
        <div className="flex__center h-20">
          <div>
            <h3 className="text-grad-pur cursor-pointer">Travel</h3>
          </div>
          <Slogan />
          <div className="md:block lg:hidden">
            {openMenu
              ? (
                (
                  <XIcon
                    onClick={handleMenu}
                    className="cursor-pointer w-8 h-8"
                  />
                ))
              : (
                (
                  <MenuIcon
                    onClick={handleMenu}
                    className="cursor-pointer w-8 h-8"
                  />
                ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
