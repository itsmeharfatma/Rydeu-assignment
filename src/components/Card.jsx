import React from "react";

const Card = ({ title, subTitle, icon, width }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-row justify-between items-end w-full sm:max-w-sm">
      <div className="flex flex-row gap-4 sm:gap-6">
        <img src={icon} alt="icon" width={width} />
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-[#484848] tracking-wide cursor-pointer hover:underline">{title}</h4>
          <p className="text-sm text-[#A8A8A8]">{subTitle}</p>
        </div>
      </div>
      <img src="linkArrow.svg" alt="link icon" width="16" className="sm:hidden" />
    </div>
  );
};

export default Card;
