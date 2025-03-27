import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../../components/guest/home/HeroSection";
import Card from "../../components/guest/home/Card";

const Homepage = () => {
  // ✅ Define `cardsData` outside the `return` statement
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
    {
      image: "/Images/guest/child.png",
      title: "Child Rescue",
      description:
        "We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for their rehabilitation.",
    },
    {
      image: "/Images/guest/bird.png",
      title: "Sparrow Rescue",
      description:
        "We rescue injured sparrows by providing rehabilitation, shelter, and food before they return to their natural habitat.",
    },
    {
      image: "/Images/guest/child2.png",
      title: "Child Rescue",
      description:
        "We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for their rehabilitation.",
    },
  ];

  return (
    <div className="p-5 bg-[#FFE7C7]">
      {/* Hero Section */}
      <HeroSection />

      {/* Section Title */}
      <div className="text-center text-2xl font-semibold my-8">The lives we touch</div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
