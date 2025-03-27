import React from "react";

const Loginpage = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
