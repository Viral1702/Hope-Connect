import React, { useEffect, useState } from "react";
import HeroCard from "../../Components/Organization/HeroCard";
import axios from "axios";

const getData = async () => {
  const user = localStorage.getItem("users");
  if (!user) return [];
  const { token } = JSON.parse(user);
  if (!token) return [];
  try {
    const { data } = await axios.get("http://localhost:3000/api/organization", {
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiX2lkIjoiNjdjZDkxZjU1MWJkMDdiZWQyY2VjMWM2IiwiaWF0IjoxNzQxNTI4MDg2fQ.UoN40QFvJU2iOB1zdirIyO5JTNDf7C-AP3m_3Wou2xg`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const OrgHomepage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      console.log("Data Is", data);
      setPost(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#FFE7C7]">
      {post.map((p) => (
        <HeroCard description={p.message} src={p.image} name="TEST" />
      ))}
    </div>
  );
};

export default OrgHomepage;
