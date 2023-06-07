import React from "react";

const StartSteps = ({ number, text }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className=" flex items-center justify-center flex-row w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]   ">
        <p    >{number}</p>
      </div>

      <p className="flex-1 ml-[30px] font-normal text-[18px] leading-[32.4px]   " >{text}</p>
    </div>
  );
};

export default StartSteps;
