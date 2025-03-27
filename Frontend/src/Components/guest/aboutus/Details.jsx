const Details = () => {
    return (
      <div className="bg-[#F7E8D5] min-h-screen p-8 font-sans">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex-1/2">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">HOPE</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">CONNECT</h2>
            <p className="text-black-600 mb-4">
              Connect with those who care. <br />
              Share your photo and let us help you find the right support <br /> and
              resources in your community. We're here to bridge the <br /> gap and
              ensure everyone gets the assistance they need.
            </p>
          </div>

          {/* Right Side - Images */}
            <div className="flex gap-4">
              <img
                src="/aboutus/child.png"
                alt="Child"
                className="w-24 h-24 rounded-full object-cover"
              />
              <img
                src="/aboutus/river.png"
                alt="Slum Area"
                className="w-24 h-24 rounded-full object-cover"
              />
              <img
                src="/aboutus/animal.png"
                alt="Dog"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
  
          </div>
        </div>
  
          {/* Section 1 - Child Beggars */}
          <div className="flex items-center gap-6 mb-8">
            <img
              src="/guest/child2.png"
              alt="Child Beggar"
              className="w-64 h-48 rounded-lg object-cover"
            />
            <p className="text-black-700">
              We connect child beggars, homeless people and orphans to their
              respective help centers like NGOs, trusts and orphanages online, so
              organizations can take actions on it.
            </p>
          </div>
  
          {/* Section 2 - Injured Animals */}
          <div className="flex items-center gap-6">
            <p className="text-black-700">
              We share photos of injured animals and birds to the veterinary
              hospitals with location via our website, so they can take actions
              at time and save the birds and animals.
            </p>
            <img
              src="/guest/bird.png"
              alt="Injured Bird"
              className="w-64 h-48 rounded-lg object-cover"
            />
          </div>
        </div>
    );
  };

export default Details;