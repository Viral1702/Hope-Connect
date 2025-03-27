const Card = ({ image, title, description }) => {
    return (
      <div className="bg-[#FFC586] w-70  rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105">
        <img src={image} alt={title} className="w-50 h-50 object-cover rounded-md  justify-center " />
        <h3 className="text-xl font-semibold mt-3">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-[#E38B29] text-white px-4 py-2 rounded-lg hover:bg-orange-700">
          Click me
        </button>
      </div>
    );
  };
  
  export default Card;
  