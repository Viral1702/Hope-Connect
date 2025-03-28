import React from "react";

const HeroCard = ({ name, description, src }) => {
  return (
    <div className="flex flex-col my-3 gap-3 items-center justify-center bg-[#FFEEDA]  w-5/6 rounded-sm">
      <div className="bg-[#FFC586] w-full  p-2 text-xl rounded-sm border-2 ">
        {name}
      </div>
      <div>{description}</div>
      <img className="h-45 rounded-2xl" src={src} alt={src} />
      <button className="bg-[#FFC586] w-full p-1 text-xl rounded-sm border-2">
        View more
      </button>
    </div>
  );
};

export default HeroCard;
