import React from "react";
import Accordion from "./Accordion";
import QueryForm from "./QueryForm";

const AccordionLayout = () => {
  return (
    <div className="flex flex-col gap-8 px-6">
      <Accordion
        title={"Chat"}
        subTitle={"Lorem ipsum doolor sit amet"}
        icon={"chat.svg"}
        width={34}
      >
        <div className="flex gap-8 justify-center items-center text-xs font-semibold">
          <div className="px-2.5 py-1.5 rounded-md flex flex-col justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img
              src="telegram.svg"
              alt="link icon"
              width="44"
              className="ml-1"
            />
            <p>Telegram</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-md flex flex-col justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img
              src="whatsapp.svg"
              alt="link icon"
              width="44"
              className="ml-1"
            />
            <p>WhatsApp</p>
          </div>
          <div className="px-2.5 py-1.5 rounded-md flex flex-col justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img
              src="liveChat.svg"
              alt="link icon"
              width="44"
              className="ml-1"
            />
            <p>Live chat</p>
          </div>
        </div>
      </Accordion>
      <Accordion
        title={"Social"}
        subTitle={"Lorem ipsum doolor sit amet"}
        icon={"social.svg"}
        width={34}
      >
        <div className="flex gap-8 justify-center items-center">
          <div className="px-2.5 py-1.5 rounded-md justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img src="facebook.svg" alt="link icon" width="28" />
          </div>
          <div className="px-2.5 py-1.5 rounded-md justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img src="instagram.svg" alt="link icon" width="28" />
          </div>
          <div className="px-2.5 py-1.5 rounded-md justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img src="twitter.svg" alt="link icon" width="28" />
          </div>
          <div className="px-2.5 py-1.5 rounded-md justify-center items-center cursor-pointer hover:bg-[#DEF6F5]">
            <img src="linkedin.svg" alt="link icon" width="28" />
          </div>
        </div>
      </Accordion>
      <Accordion
        title={"Send Query"}
        subTitle={"Lorem ipsum doolor sit amet"}
        icon={"query.svg"}
        width={32}
      >
        <QueryForm />
      </Accordion>
    </div>
  );
};

export default AccordionLayout;
