import React from "react";
import { Link } from "react-router-dom";
const Post = ({ image, name, location, content }) => {
  return (
    <div className="flex flex-col my-3 gap-3 items-center justify-center bg-[#FFEEDA]  w-5/6 rounded-sm">
      <div className="bg-[#FFC586] w-full  p-1 text-lg rounded-sm border-2 ">
        {name}
      </div>
      <div>{content}</div>
      <img
        className="h-45 rounded-2xl"
        src={`http://localhost:3000/${image}`}
        alt={image}
      />
      <button className="bg-[#FFC586] w-full  text-lg rounded-sm border-2">
        <Link to={location}>Location</Link>
      </button>
    </div>
  );
};

export default Post;
