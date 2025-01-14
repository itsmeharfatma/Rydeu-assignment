import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 px-12 shadow-md w-full flex flex-row justify-between">
      <h1 className="text-[#FD2E5A] font-semibold text-2xl">LOGO</h1>
      <div className="flex flex-row gap-8 text-sm font-semibold">
        <div className="flex items-center gap-1 text-[#161616]">
          <img src="help.svg" alt="FAQ icon" width="24" />
          <p className="tracking-wide">Help</p>
        </div>
        <div className="flex items-center gap-1 text-[#161616]">
          <img className="mt-0.5" src="flag.svg" alt="FAQ icon" width="24" />
          <p className="tracking-wider">Deutsch | EUR</p>
        </div>
        <div className="bg-[#EDEDED] flex items-center gap-2 border broder-[#DFDFDF] rounded-full text-[#161616] py-1.5 px-3">
          <img src="laptopUser.svg" alt="FAQ icon" width="24" />
          <img src="laptopMenu.svg" alt="FAQ icon" width="24" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
