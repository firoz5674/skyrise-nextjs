"use client";
import React, { useState } from "react";
import contact from "../../assets/images/contact.webp";
import Image from "next/image";
import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from 'emailjs-com';

const HomeContact = () => {

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value
    })
    setErrors({...errors, [e.target.name]: ''})
  }

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!inputFields.firstName) newErrors.firstName = 'First Name is required';
    if(!inputFields.email || !emailRegex.test(inputFields.email)) newErrors.email = 'Invalid Email Address';
    if(!inputFields.phone) newErrors.phone = 'Phone number is required';
    if(!inputFields.message) newErrors.message = 'Message is required';

    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,  
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      // 'template_bf6mcx3', 
      // 'skyrise_mail',  
      // 'template_bf6mcx3', 
      {
        first_name: inputFields.firstName,
        last_name: inputFields.lastName,
        email: inputFields.email,
        phone: inputFields.phone,
        service: inputFields.service,
        message: inputFields.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
    ).then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      setSuccessMsg('Your message has been successfully sent! We will contact you shortly');
      setInputFields({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
      setLoading(false);

      setTimeout(() => {
        setSuccessMsg('');
      }, 4000)

    }).catch((err) => {
      console.error('Failed to send email. Error:', err);
      setLoading(false);
    });

  };

  console.log(inputFields, 'inputFields');


  return (
    <section className="pt-[80px] pb-[120px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 px-0 lg:px-[24%]">
          Get in Touch: Let’s Bring Your Vision to Life!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 place-items-center">
          <div className="col-span-1 lg:col-span-5">
            <Image src={contact} className="h-auto mb-6 lg:mb-0 lg:h-[500px] object-contain" priority alt="" />
          </div>
          <div className="col-span-1 lg:col-span-5 flex justify-start items-start flex-col ml-0 lg:ml-20 w-full">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                <div className="mb-0">
                  <input type="text" name="firstName" id="firstName" className="w-full" placeholder="First Name" onChange={handleChange} value={inputFields.firstName} />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="mb-0">
                  <input type="text" name="lastName" id="lastName" className="w-full" placeholder="Last Name" onChange={handleChange} value={inputFields.lastName} />
                </div>
                <div className="mb-0">
                  <input type="text" name="email" id="email" className="w-full" placeholder="Email Address" onChange={handleChange} value={inputFields.email} />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="mb-5">
                  <input type="text" name="phone" id="phone" className="w-full" placeholder="Phone Number" onChange={handleChange} value={inputFields.phone} />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
              </div>
              <div className="mb-5 w-full">
                <select className="w-full cursor-pointer" value={inputFields.service} name="service" onChange={handleChange}>
                  <option value="">Select Service...</option>
                  <option value="service1">service 1</option>
                  <option value="service2">service 2</option>
                  <option value="service3">service 3</option>
                </select>
              </div>
              <div className="mb-5 w-full">
                <textarea name="message" id="" rows="5" className="w-full" placeholder="Your Message" onChange={handleChange} value={inputFields.message}></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <div className="w-full mb-6">
                <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Submitting....': 'Submit'}</button>
              </div>
              {successMsg && (
                <div className="bg-[#0fa70f] text-white rounded-lg text-base text-center p-3 font-medium">{successMsg}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
