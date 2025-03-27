const HeroSection = () => {
    return (
      <div className="container mx-auto flex flex-col md:flex-row items-center py-10 px-5">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">A Beacon Of Light</h1>
          <p className="text-lg mt-4">
            In a world where you <br /> can be anything,
            <br />
            <strong className="text-[#E38B29]">BE KIND!</strong>
          </p>
        </div>
  
        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/guest/HeroImage.png"
            alt="Hope Connect"
            className="w-60 md:w-80 "
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  