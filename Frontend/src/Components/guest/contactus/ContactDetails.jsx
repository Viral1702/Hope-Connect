import React from "react";

function ContactForm() {
  return (
    <div className="bg-[#FFE7C7] min-h-screen flex justify-center items-center p-5">
      <div
        className="bg-[#FAEBD7] p-5 font-serif text-center max-w-lg rounded-lg shadow-md"
      >
        <h2 className="text-[#333]">Contact Us</h2>
        <p className="text-[#555] mb-5">
          Any questions or remarks? Just write us a message!
        </p>

        <form className="flex flex-col items-center">
          <div className="flex justify-between w-full mb-2">
            <div className="w-1/2 mr-2">
              <label htmlFor="email" className="text-left block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="name" className="text-left block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
          </div>

          <label htmlFor="message" className="text-left block w-full">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 rounded border border-gray-300 mb-5"
          ></textarea>

          <button
            type="submit"
            className="px-5 py-2 bg-gray-200 border-none rounded cursor-pointer hover:bg-gray-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-5 flex justify-center gap-16">
          <div className="flex items-center">
            <img
              src="/contactus/phone.png"
              width={35}
              height={35}
              alt="phone"
              className="mr-2"
            />
            <div>
              <p>+91 90232 44500</p>
              <p>+91 82008 60989</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/contactus/email.png"
              width={35}
              height={35}
              alt="email"
              className="mr-2"
            />
            <p>msanghani046@rku.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
