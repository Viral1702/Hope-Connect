import React, { useEffect, useState } from "react";
import HeroCard from "../../Components/Organization/HeroCard";
import axios from "axios";
import { useOrgContext } from "../../Context/OrganizationContext";

const getData = async () => {
  const user = localStorage.getItem("users");
  if (!user) return [];
  const { token } = JSON.parse(user);
  if (!token) return [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/organization", {
      headers: {
        Authorization: token,
      },
    });

    return data;
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
    <div className="flex flex-col justify-center items-center bg-[#FFE7C7]">
      {post.map((p) => (
        <HeroCard
          description={p.message}
          src={p.image}
          name={p.userId.name}
          key={p._id}
          id={p._id}
        />
      ))}
    </div>
  );
};

export default OrgHomepage;
