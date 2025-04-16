const Card = ({ image, title, description }) => {
  return (
    <div className="bg-[#FFC586] w-72 rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105 text-center">
      {/* Image wrapper to center image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-50 h-50 object-cover rounded-md"
        />
      </div>

      <h3 className="text-xl font-semibold mt-1">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>

      <button className="mt-4 bg-[#E38B29] text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
        Click me
      </button>
    </div>
  );
};

export default Card;
