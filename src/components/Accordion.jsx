import React, { useState } from "react";

const Accordion = ({ title, subTitle, icon, width, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto mt-4 w-full shadow-md rounded-lg max-w-[792px]">
      <div>
        <div
          className="flex cursor-pointer items-center justify-between py-6 px-10 rounded-lg bg-white"
          onClick={toggleAccordion}
        >
          <div className="flex gap-4 sm:gap-8">
            <img src={icon} alt="icon" width={width} />
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-[#484848] tracking-wide">
                {title}
              </h2>
              <p className="text-sm text-[#A8A8A8]">{subTitle}</p>
            </div>
          </div>

          <i
            className={`fas fa-chevron-${
              isOpen ? "up" : "down"
            } fa-sm text-[#777777]`}
          ></i>
        </div>
        {isOpen && (
          <div className="pt-4 bg-white rounded-b-lg px-2.5 pb-6 flex justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
