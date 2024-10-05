"use client";
import React, { useState } from "react"
import emailjs from 'emailjs-com';

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
      }, 7000)

    }).catch((err) => {
      console.error('Failed to send email. Error:', err);
      setLoading(false);
    });

  };

  return (
    <section className="bg-[#FAFAFB] py-8 lg:py-[110px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-[5rem]">Let&apos;s have a coffee together!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 w-full lg:w-[60%] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between w-full flex-wrap">
              <div className="w-[48%]">
                <div className="mb-7">
                  <input type="text" name="firstName" className="w-full border-none shadow-very-light-shadow py-4" placeholder="First Name" value={inputFields.firstName} onChange={handleChange} />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
              </div>
              <div className="w-[48%]">
                <div className="mb-7">
                  <input type="text" name="lastName" className="w-full border-none shadow-very-light-shadow py-4" placeholder="Last Name" value={inputFields.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="w-[48%]">
                <div className="mb-7">
                  <input type="text" name="email" className="w-full border-none shadow-very-light-shadow py-4" placeholder="Email Address" value={inputFields.email} onChange={handleChange} />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="w-[48%]">
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
                  <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
                </div> 
                {successMsg && (
                  <div className="bg-[#0fa70f] text-white rounded-lg text-base text-center p-3 font-medium">{successMsg}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPageForm