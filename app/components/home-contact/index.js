import React from "react";
import contact from "../../assets/images/contact.jpg";
import Image from "next/image";

const HomeContact = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 px-0 lg:px-[24%]">
          Want to hire us to boost site contact us any time!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 place-content-center gap-6">
          <div className="col-span-1 lg:col-span-5">
            <Image src={contact} className="mx-aut" priority alt="" />
          </div>
          <div className="col-span-1 lg:col-span-5 flex justify-start items-start flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="mb-0">
                <input type="text" name="firstName" id="firstName" className="w-full" placeholder="First Name" />
              </div>
              <div className="mb-0">
                <input type="text" name="lastName" id="lastName" className="w-full" placeholder="Last Name" />
              </div>
              <div className="mb-0">
                <input type="text" name="email" id="email" className="w-full" placeholder="Email Address" />
              </div>
              <div className="mb-5">
                <input type="text" name="phone" id="phone" className="w-full" placeholder="Phone Number" />
              </div>
            </div>
            <div className="mb-5 w-full">
              <select className="w-full cursor-pointer" name="services">
                <option value="">Select Service...</option>
                <option value="">service 1</option>
                <option value="">service 2</option>
                <option value="">service 3</option>
              </select>
            </div>
            <div className="mb-5 w-full">
              <textarea name="message" id="" rows="5" className="w-full" placeholder="Your Message"></textarea>
            </div>
            <div className="w-full">
              <button type="submit" className="btn btn-primary w-full">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
