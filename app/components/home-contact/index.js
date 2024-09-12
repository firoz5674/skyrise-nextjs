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
  })

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
    }).catch((err) => {
      console.error('Failed to send email. Error:', err);
    });

    setInputFields({ firstName: '', lastName: '', email: '' });
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
                </div>
                <div className="mb-0">
                  <input type="text" name="lastName" id="lastName" className="w-full" placeholder="Last Name" onChange={handleChange} value={inputFields.lastName} />
                </div>
                <div className="mb-0">
                  <input type="text" name="email" id="email" className="w-full" placeholder="Email Address" onChange={handleChange} value={inputFields.email} />
                </div>
                <div className="mb-5">
                  <input type="text" name="phone" id="phone" className="w-full" placeholder="Phone Number" onChange={handleChange} value={inputFields.phone} />
                </div>
              </div>
              <div className="mb-5 w-full">
                <select className="w-full cursor-pointer" name="service" onChange={handleChange}>
                  <option value="">Select Service...</option>
                  <option value="">service 1</option>
                  <option value="">service 2</option>
                  <option value="">service 3</option>
                </select>
              </div>
              <div className="mb-5 w-full">
                <textarea name="message" id="" rows="5" className="w-full" placeholder="Your Message" onChange={handleChange} value={inputFields.message}></textarea>
              </div>
              <div className="w-full">
                <button type="submit" className="btn btn-primary w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
