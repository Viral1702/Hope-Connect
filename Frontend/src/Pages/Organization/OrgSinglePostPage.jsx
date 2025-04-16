import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ParticularCard from "../../Components/Organization/ParticularCard";

const getPostData = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) return [];
  const { data } = await axios.get(
    `http://localhost:3000/api/organization/${id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return data[0];
};

const OrgSinglePostPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostData(id);
      setPostData(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex justify-center">
      {console.log(postData)}
      <ParticularCard
        id={id}
        name={postData?.userId?.name}
        description={postData?.message}
        src={postData?.image}
        location={postData?.location}
        number={postData?.userId?.number}
      />
      {console.log(postData)}
    </div>
  );
};

export default OrgSinglePostPage;
