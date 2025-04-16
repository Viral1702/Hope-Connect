import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../Components/user/Post";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found!");
          return;
        }

        const res = await axios.get("http://localhost:3000/api/", {
          headers: {
            Authorization: token,
          },
        });

        // Safe check: if response data is array
        if (Array.isArray(res.data.data)) {
          setPosts(res.data.data);
        } else {
          console.error("API response is not an array:", res.data.data);
          setPosts([]); // fallback
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        setPosts([]); // fallback in error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-8xl mx-auto p-6 flex flex-col items-center bg-[#FCE3C7] min-h-screen">
      <div className="w-full flex flex-col items-center">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((p) => (
            <Post
              key={p._id}
              name={p.userId?.name || "Unknown User"}
              content={p.message}
              image={p.image}
              location={p.location}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default AllPost;
