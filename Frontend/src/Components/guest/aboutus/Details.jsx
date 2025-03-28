const Details = () => {
  return (
    <div className="bg-[#F7E8D5] min-h-screen p-8 font-sans">
      <div className="max-w-5xl mx-auto rounded-lg p-8">
        <div className="flex items-center justify-between p-10">
          {/* Left Side - Text */}
          <div className="w-250">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">HOPE</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">CONNECT</h2>
            <p className="text-black-600 mb-4">
              Connect with those who care.
              <br />
              Share your photo and let us help you find the right support <br />{" "}
              and resources in your community. We're here to bridge the <br />{" "}
              gap and ensure everyone gets the assistance they need.
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="flex flex-col items-center gap-2">
            <table>
              <tr>
                <td>
                  <div className="w-36 h-36 rounded-4xl overflow-hidden">
                    <img src="/aboutus/child.png" alt="child" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td>
                  <div className="w-36 h-36 rounded-4xl overflow-hidden">
                    <img src="/aboutus/river.png" alt="slum" className="w-full h-full object-cover" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="w-36 h-36 rounded-4xl overflow-hidden ml-16">
                    <img src="/aboutus/animal.png" alt="dog" className="w-full h-full object-cover" />
                  </div>
                </td>
              </tr>            
            </table>

            {/* <div className="flex gap-2">
              <div className="w-36 h-36 rounded-4xl overflow-hidden">
                <img
                  src="/aboutus/child.png"
                  alt="Child"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-36 h-36 rounded-4xl overflow-hidden">
                <img
                  src="/aboutus/river.png"
                  alt="Slum Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-36 h-36 rounded-4xl overflow-hidden">
                <img
                  src="/aboutus/animal.png"
                  alt="Dog"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Section 1 - Child Beggars */}
      <div className="flex items-center justify-center gap-6 ml-50 mt-20 mb-8 w-250">
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
      <div className="flex items-center gap-6 mt-20 mb-8 w-250 ml-50">
        <p className="text-black-700">
          We share photos of injured animals and birds to the veterinary
          hospitals with location via our website, so they can take actions at
          time and save the birds and animals.
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
