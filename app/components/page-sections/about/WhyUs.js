import { whyChooseAbout } from "@/app/data";
import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2>Why Choose Skyrise Construction & Interiors?</h2>
          <p className="mb-24 px-0 md:px-[16%]">
            At Skyrise Construction & Interiors, we pride ourselves on providing
            top-quality construction and interior services tailored to your
            needs. Whether you&apos;re looking for residential or commercial
            projects, we have the expertise to bring your vision to life. Here’s
            why we are the best choice for your next project:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseAbout.map((item) => {
            return (
              <div className="text-center mb-10" key={item}>
                <div className={`mx-auto py-5 px-5 rounded-xl w-max flex justify-center items-center`} style={{backgroundColor: item.bgColor}}>
                  <Image src={item.img} className="invert w-[90%]" priority alt="" />
                </div>
                <h3 className="text-[24px]">{item.title}</h3>
                <p className="text-[18px]">{item.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
