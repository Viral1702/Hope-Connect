import React from "react";


const posts = [
  {
    id: 1,
    name: "Priyal Bhesaniya",
    content:
      "I found two child beggars at Raiya Chowk, struggling without food or shelter. They need urgent rescue and support from welfare organizations. Please take immediate action to help them find a safe place.",
    image: "/guest/child2.png",
  },
  {
    id: 2,
    name: "Madhvi Sanghani",
    content:
      "I found garbage floating in the water, making it look dirty and unsafe. It harms the environment and marine life, showing the need for proper waste disposal.",
    image: "/guest/bird.png",
  },
  {
    id: 3,
    name: "Madhvi Sanghani",
    content:
      "I found garbage floating in the water, making it look dirty and unsafe. It harms the environment and marine life, showing the need for proper waste disposal.",
    image: "/guest/child.png",
  },
];

const AllPost = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 flex flex-col items-center bg-[#FCE3C7] min-h-screen">
      <div className="w-full flex flex-col items-center">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md w-3/5 my-5 p-4"
          >
            <div className="flex justify-between items-center font-bold text-gray-800 bg-[#FF914D] rounded-md px-4 py-2">
              <h5>{post.name}</h5>
              <i className="fas fa-external-link-alt text-gray-600 cursor-pointer"></i>
            </div>
            <div className="mt-3">
              <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>
              <img
                src={post.image}
                alt="Post"
                className="w-46 h-auto rounded-md mt-2"
              />
            </div>
            <div className="mt-3 text-sm text-gray-600 bg-[#FF914D] rounded-md px-4 py-2">
              📍 Location
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
