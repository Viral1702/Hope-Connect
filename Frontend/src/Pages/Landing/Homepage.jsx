import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../../components/guest/home/HeroSection";
import Card from "../../components/guest/home/Card";

const Homepage = () => {
  const cardsData = [
    {
      image: "/guest/child2.png",
      title: "Child Rescue",
      description:
        "We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for their rehabilitation.",
    },
    {
      image: "/guest/bird.png",
      title: "Sparrow Rescue",
      description:
        "We rescue injured sparrows by providing rehabilitation, shelter, and food before they return to their natural habitat.",
    },
    {
      image: "/guest/child.png",
      title: "Child Rescue",
      description:
        "We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for their rehabilitation.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#FFE7C7] py-10 px-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-orange-700 mt-12 mb-8">
        The Lives We Touch
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl justify-items-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
