import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ParticularCard = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/organization/${id}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPost(res.data.data[0]);
      } catch (error) {
        toast.error("Failed to load post");
      }
    };

    fetchPost();
  }, [id, token]);

  const handleApprove = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/organization/approve/${id}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message || "Post Approved!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleReject = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/organization/reject/${id}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.error(res.data.message || "Post Rejected!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#FFEEDA] text-xl">
        Loading...
      </div>
    );
  }

  {
    console.log(post);
  }
  return (
    <div className="flex flex-col my-3 gap-3 items-center justify-center bg-[#FFEEDA] w-5/6 rounded-sm">
      <div className="bg-[#FFC586] w-full px-2 py-1 text-lg rounded-sm border-2">
        {post?.userId?.name}
      </div>
      <div>{post.message}</div>
      <img
        className="h-45 rounded-2xl"
        src={`http://localhost:3000/${post.image}`}
        alt={post.image}
      />
      <div className="bg-[#FFC586] w-full text-lg rounded-sm border-2 flex justify-evenly py-2">
        <Link to={`${post.location}`}>Location</Link>
        <a href={`tel:${post?.userId?.number}`}>{post?.userId?.number}</a>
        <button
          onClick={handleApprove}
          className="text-green-700 hover:underline"
        >
          Accept
        </button>
        <button onClick={handleReject} className="text-red-700 hover:underline">
          Decline
        </button>
      </div>
    </div>
  );
};

export default ParticularCard;
