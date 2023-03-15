import React from "react";
//images
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-7">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" className="w-[200px]" />
          </a>
          {/* button */}
          {/*<button className="btn btn-sm">Work with me</button>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
