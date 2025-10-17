

"use client";
import React, { useState } from "react";
import contact from "../../assets/images/contact.webp";
import Image from "next/image";

const HomeContact = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputFields.firstName) newErrors.firstName = "First Name is required";
    if (!inputFields.email || !emailRegex.test(inputFields.email))
      newErrors.email = "Invalid Email Address";
    if (!inputFields.phone) newErrors.phone = "Phone number is required";
    if (!inputFields.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputFields),
      });

      if (response.ok) {
        setSuccessMsg("Your message has been successfully sent! We will contact you shortly.");
        setInputFields({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => setSuccessMsg(""), 10000);
      } else {
        const data = await response.json();
        console.error("Error:", data.error);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-[80px] pb-[120px]" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 px-0 lg:px-[24%]">
          Get in Touch: Let’s Bring Your Vision to Life!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="mb-12 md:mb-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.633062724546!2d77.28850887528593!3d28.55074697570956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce408a34923cd%3A0x19f7ba48a2bc419d!2sSkyrise%20construction%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1760694967531!5m2!1sen!2sin" className="border border-gray-400 w-full md:w-[94%] h-[350px] md:h-[450px] rounded-xl" allowfullscreen=""></iframe>
          </div>
          <div className="">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={inputFields.firstName}
                    onChange={handleChange}
                    className="w-full"
                  />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={inputFields.lastName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={inputFields.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={inputFields.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5">
                <select
                  name="service"
                  value={inputFields.service}
                  onChange={handleChange}
                  className="w-full cursor-pointer"
                >
                  <option value="">Select Service...</option>
                  <option value="Prefabricated Modular Houses">Prefabricated Modular Houses</option>
                  <option value="Tensile Structure">Tensile Structure</option>
                  <option value="Home Interior">Home Interior</option>
                  <option value="Office Interior">Office Interior</option>
                  <option value="Complete Construction">Complete Construction</option>
                  <option value="Turnkey Interior Design">Turnkey Interior Design</option>
                </select>
              </div>

              <div className="mt-5">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={inputFields.message}
                  onChange={handleChange}
                  className="w-full"
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>

              <div className="mt-6">
                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {successMsg && (
                <div className="bg-green-600 text-white text-center font-medium p-4 mt-4 rounded-lg">
                  {successMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
