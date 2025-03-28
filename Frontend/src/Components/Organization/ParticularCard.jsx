import React from "react";
import { Link } from "react-router-dom";
const ParticularCard = ({ name, description, src, location, number }) => {
  return (
    <div className="flex flex-col my-3 gap-3 items-center justify-center bg-[#FFEEDA]  w-5/6 rounded-sm">
      <div className="bg-[#FFC586] w-full px-2 py-1 text-lg rounded-sm border-2 ">
        {name}
      </div>
      <div>{description}</div>
      <img className="h-45 rounded-2xl" src={src} alt={src} />
      <button className="bg-[#FFC586] w-full  text-lg rounded-sm border-2 flex justify-evenly">
        <Link
          to={`https://www.google.com/maps?q=${location?.x},${location?.y}`}
        >
          location
        </Link>
        <p>
          <a href={`tel:${number}`}>{number}</a>
        </p>
        <Link to={`/organization/`}>Accept</Link>
        <Link to={`/organization/`}>Dcline</Link>
      </button>
    </div>
  );
};

export default ParticularCard;
