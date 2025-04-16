import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto-focus next input
    if (value && index < 5) {
      document.getElementById('otp-${index + 1}').focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    const token = localStorage.getItem("token");

    if (!otpCode || otpCode.length !== 6) {
      return toast.error("Please enter a valid 6-digit OTP");
    }

    const loadingToast = toast.loading("Verifying OTP...");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        { otp: otpCode },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      toast.success(data.message || "OTP Verified Successfully!", {
        id: loadingToast,
      });

      // Clear token and redirect
      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed.", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <div className="bg-orange-200 p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-semibold mb-6">Verify OTP</h2>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={'otp-${index}'}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-10 h-10 text-center border rounded-md text-lg bg-white"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;