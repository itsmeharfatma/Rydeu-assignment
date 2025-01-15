import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-4 md:px-12 shadow-md w-full flex flex-row justify-between bg-white">
      <h1 className="text-[#FD2E5A] font-semibold text-2xl cursor-pointer">LOGO</h1>
      {/* laptop */}
      <div className="flex flex-row gap-8 text-sm font-semibold max-sm:hidden">
        <div className="flex items-center gap-1 text-[#161616] cursor-pointer">
          <img src="help.svg" alt="FAQ icon" width="24" />
          <p className="tracking-wide">Help</p>
        </div>
        <div className="flex items-center gap-1 text-[#161616] cursor-pointer">
          <img className="mt-0.5" src="flag.svg" alt="FAQ icon" width="24" />
          <p className="tracking-wider">Deutsch | EUR</p>
        </div>
        <div className="bg-[#EDEDED] flex items-center gap-2 border broder-[#DFDFDF] rounded-full py-1.5 px-3 cursor-pointer">
          <img src="laptopUser.svg" alt="FAQ icon" width="24" />
          <img src="laptopMenu.svg" alt="FAQ icon" width="24" />
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-row gap-3 text-sm font-semibold items-center sm:hidden">
        <p className="tracking-wider text-[#484848] cursor-pointer">Open Requests</p>
        <div className="flex items-center gap-2 text-[#161616] py-1.5 px-3 cursor-pointer">
          <img src="mobileUser.svg" alt="FAQ icon" width="18" />
          <img src="mobileMenu.svg" alt="FAQ icon" width="24" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
