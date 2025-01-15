import React from "react";
import Card from "./Card";

const CardLayout = () => {
  return (
    <div className="flex flex-row max-sm:flex-col items-center justify-center gap-6 mt-14 mb-6 px-6">
      <Card
        title={"FAQ"}
        subTitle={"Lorem ipsum doolor sit amet"}
        icon={"faq.svg"}
        width={44}
      />
      <Card
        title={"Travel Guide"}
        subTitle={"Lorem ipsum doolor sit amet"}
        icon={"travelGuide.svg"}
        width={36}
      />
    </div>
  );
};

export default CardLayout;
