import React, { useEffect, useState } from "react";
import HeroCard from "../../Components/Organization/HeroCard";
import axios from "axios";
import { useOrgContext } from "../../Context/OrganizationContext";

const getData = async () => {
  const token = localStorage.getItem("token");

  if (!token) return [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/organization", {
      headers: {
        Authorization: token,
      },
    });
    console.log(data);

    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const OrgHomepage = () => {
  const { post, setPost } = useOrgContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setPost(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#FFE7C7] p-4">
      {post.length > 0 ? (
        post.map((p) => (
          <HeroCard
            description={p.message}
            src={p.image}
            name={p.userId.name}
            key={p._id}
            id={p._id}
          />
        ))
      ) : (
        <div className="text-gray-700 text-xl font-semibold mt-20">
          No posts yet.
        </div>
      )}
    </div>
  );
};

export default OrgHomepage;
