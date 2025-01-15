import React from "react";

const Greeting = () => {
  return (
    <div className="text-center mt-20 flex flex-col gap-2 md:gap-4 px-6">
      <h1 className="max-sm:text-2xl text-4xl font-bold text-[#073A4D]">
        Hello, how can we help you?
      </h1>
      <p className="font-semibold max-sm:text-base text-lg text-[#484848]">
        Find Travel guide, FAQ, chat,
      </p>
    </div>
  );
};

export default Greeting;
