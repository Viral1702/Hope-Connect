import React from 'react';

function Post() {
  return (
    <div className="bg-[#F7E8D5] min-h-screen p-4 sm:p-8 font-sans">
      <div className="mx-auto mt-8 sm:mt-20 max-w-md sm:max-w-lg">
        <div className="bg-[#FFC586] p-2 rounded mb-2">
          Priyal Bhesaniya
        </div>

        <textarea
          placeholder="Share your thoughts ....................."
          className="w-full bg-white p-2 rounded border-none outline-none resize-none mb-2"
          rows="4"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#FFC586] rounded">
          <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
            <label className="text-sm p-2 rounded mr-0 sm:mr-2 cursor-pointer mb-2 sm:mb-0 w-full sm:w-auto">
              Upload Photo
              <input type="file" className="hidden" />
            </label>

            <select className="text-sm p-2 rounded mr-0 sm:mr-2 cursor-pointer w-full sm:w-auto">
              <option>Maa Gauri Gaushala</option>
              <option>Shree Kranti Manav Seva Trust</option>
              <option>Navjeevan Trust</option>
            </select>
          </div>
          <button className="text-black text-sm p-2 rounded">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;