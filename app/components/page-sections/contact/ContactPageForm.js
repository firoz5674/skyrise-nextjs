"use client";
import React, { useState, useEffect } from "react";
import LocationIcon from "../../svg-icons/location-icon";
import ChevDown from "../../svg-icons/chev-down";
import Image from "next/image";

const ContactPageForm = () => {
  const [inputFields, setInputFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [dropddown, setDropdown] = useState(false);

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value
    });
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setErrorMsg('');
  }

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputFields.firstName) newErrors.firstName = 'First Name is required';
    if (!inputFields.email || !emailRegex.test(inputFields.email)) newErrors.email = 'Invalid Email Address';
    if (!inputFields.phone) newErrors.phone = 'Phone number is required';
    if (!inputFields.message) newErrors.message = 'Message is required';

    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

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

      const data = await response.json(); 

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
        console.error("Server returned error:", data);
        setErrorMsg(data?.error || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Network or other error:", err);
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropddown);
  }

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('http error');
      const result = await response.json();
      setCountries(result);
    } catch (err) {
      console.log(err, 'api error');
    }
  }

  return (
    <section className="bg-[#FAFAFB] py-8 lg:py-[110px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-[5rem]">Let&apos;s have a coffee together!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">
          <div className="mb-12 md:mb-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.633062724546!2d77.28850887528593!3d28.55074697570956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce408a34923cd%3A0x19f7ba48a2bc419d!2sSkyrise%20construction%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1760694967531!5m2!1sen!2sin" className="border border-gray-400 w-full md:w-[94%] h-[350px] md:h-[450px] rounded-xl" allowfullscreen=""></iframe>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between w-full flex-wrap">
              <div className="w-full md:w-[48%]">
                <div className="mb-7">
                  <input type="text" name="firstName" className="w-full border-none shadow-very-light-shadow py-4" placeholder="First Name" value={inputFields.firstName} onChange={handleChange} />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
              </div>
              <div className="w-full md:w-[48%]">
                <div className="mb-7">
                  <input type="text" name="lastName" className="w-full border-none shadow-very-light-shadow py-4" placeholder="Last Name" value={inputFields.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="w-full md:w-[48%]">
                <div className="mb-7">
                  <input type="text" name="email" className="w-full border-none shadow-very-light-shadow py-4" placeholder="Email Address" value={inputFields.email} onChange={handleChange} />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="w-full md:w-[48%]">
                <div className="mb-7">
                  <input type="text" name="phone" className="w-full border-none shadow-very-light-shadow py-4" placeholder="Phone Number" value={inputFields.phone} onChange={handleChange} />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
              </div>

              <div className="w-full">
                <div className="mb-7">
                  <select name="service" className="w-full border-none shadow-very-light-shadow py-4 cursor-pointer" value={inputFields.service} onChange={handleChange}>
                    <option value="">Select Service...</option>
                    <option value="Prefabricated Modular Houses">Prefabricated Modular Houses</option>
                    <option value="Tensile Structure">Tensile Structure</option>
                    <option value="Home Interior">Home Interior</option>
                    <option value="Office Interior">Office Interior</option>
                    <option value="Complete Construction">Complete Construction</option>
                    <option value="Turnkey Interior Design">Turnkey Interior Design</option>
                  </select>
                </div>
              </div>

              <div className="w-full">
                <div className="mb-7">
                  <textarea name="message" rows="6" cols="12" className="w-full border-none shadow-very-light-shadow py-4 resize-none" placeholder="Your Requirements..." value={inputFields.message} onChange={handleChange}></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
              </div>

              <div className="w-full">
                <div className="mb-7">
                  <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>

                {successMsg && (
                  <div className="bg-[#0fa70f] text-white rounded-lg text-base text-center p-4 font-medium">{successMsg}</div>
                )}
                {errorMsg && (
                  <div className="bg-[#ffdddd] text-[#990000] rounded-lg text-base text-center p-4 font-medium mt-3">{errorMsg}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPageForm;
