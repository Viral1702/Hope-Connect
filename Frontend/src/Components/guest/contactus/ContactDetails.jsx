import React from "react";

function ContactForm() {
  return (
    <div className="bg-[#FFE7C7] min-h-screen flex justify-center items-center p-5"
        style={{
            padding: "20px 20px 10px 20px", // Reduced bottom padding
        }}
        >
      <div
        style={{
          backgroundColor: "#FAEBD7", // Light Beige background
          padding: "20px",
          fontFamily: "serif", // Use a serif font as in the image
          textAlign: "center",
          maxWidth: "600px", // Limit the width for better readability
          borderRadius: "8px", // Add rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
          marginBottom: "0px", // to reduce bottom space
        }}
      >
        <h2 style={{ color: "#333" }}>Contact Us</h2>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Any questions or remarks? Just write us a message!
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "10px",
            }}
          >
            <div style={{ width: "48%" }}>
              <label
                htmlFor="email"
                style={{ textAlign: "left", display: "block" }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ width: "48%" }}>
              <label
                htmlFor="name"
                style={{ textAlign: "left", display: "block" }}
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          <label
            htmlFor="message"
            style={{ textAlign: "left", display: "block", width: "100%" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#e0e0e0",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "70px",
          }}
        >
          <div
            style={{
              marginRight: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              role="img"
              aria-label="phone"
              style={{ fontSize: "24px", marginRight: "5px" }}
            >
              <img src="/contactus/phone.png" width={35} height={35} />
            </span>
            <div>
              <p>+91 90232 44500</p>
              <p>+91 82008 60989</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              role="img"
              aria-label="email"
              style={{ fontSize: "24px", marginRight: "5px" }}
            >
              <img src="/contactus/email.png" width={35} height={35} />
            </span>
            <p>msanghani046@rku.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
