import Image from "next/image";
import React from "react";
import about from "../../assets/images/about.png";
import CheckIcon from "../svg-icons/check-icon";

const AboutSection = () => {
  return (
    <section className="pt-[120px] pb-[90px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              src={about}
              className="w-full h-[450px] object-contain rounded-xl"
              priority
              alt=""
            />
          </div>
          <div>
            <div className="w-[140px] h-[5px] bg-button-gradient"></div>
            <h2>
              About Us: Building the Future, Designing Dreams
            </h2>
            <p className="mb-5">
             At <strong>Skyrise Construction & Interiors</strong>, we combine innovation, craftsmanship, and passion to deliver exceptional construction and interior design solutions tailored to your unique needs.
            </p>
            <ul>
              <li className="flex items-start mb-3">
                <div>
                  <CheckIcon color="#5E36F2" size={33} className="mr-3 mt-1" />
                </div>
                We bring over 26 years of industry experience to every construction and interior design project.
              </li>
              <li className="flex items-start mb-3">
                <div>
                  <CheckIcon color="#5E36F2" size={33} className="mr-3 mt-1" />
                </div>
                We are committed to using sustainable, eco-friendly building practices and materials.
              </li>
              <li className="flex items-start mb-3">
                <div>
                  <CheckIcon color="#5E36F2" size={33} className="mr-3 mt-1" />
                </div>
                We ensure timely project completion without compromising on quality or craftsmanship.
              </li>
              <li className="flex items-start mb-3">
                <div>
                  <CheckIcon color="#5E36F2" size={33} className="mr-3 mt-1" />
                </div>
                Our expert team excels in creating modern, stylish, and functional residential and commercial spaces.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
