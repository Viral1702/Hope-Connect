import React from 'react';

const Network = () => {
  const cards = [
    {
      id: 1,
      image: '/Network/NGO.png',
      description:
        'We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for rehabilitation.',
    },
    {
      id: 2,
      image: '/Network/NGO.png',
      description:
        'We rescue birds by protecting their habitats, providing food, and raising awareness for their conservation.',
    },
    {
      id: 3,
      image: '/Network/NGO.png',
      description:
        'We rescue child beggars by reporting, tracking, and connecting them with welfare organizations for rehabilitation.',
    },
  ];

  return (
    <div className="bg-orange-100 min-h-screen p-8">
      {/* Header Section */}
      <div className='flex items-center justify-between p-10 bg-orange-200 mb-20 rounded-2xl'>
        <div className='w-202'>
          <img
            src="/Network/Main.png"
            alt="Logo"
            className="mx-auto w-150 h-100 mb-4"
          />
        </div>
        <div className='flex flex-col items-center mr-60'>
          <p className="text-lg font-semibold">Alone we can do so little</p>
          <p className="text-lg font-semibold ml-20">Together we can do so much.</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-orange-200 p-6 rounded-xl shadow-md text-center w-100 h-110"
          >
            <div className="mx-auto flex items-center justify-center mb-9">
              <img src={card.image} alt="NGO" className='w-50 h-50'/>
            </div>
            <p className="text-sm mb-4">{card.description}</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
