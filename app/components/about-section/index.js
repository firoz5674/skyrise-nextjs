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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, pariatur officia cum optio perferendis voluptatum
              nostrum, quam unde harum adipisci rem atque. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
            <ul>
              <li className="flex items-start mb-3">
                <CheckIcon color="#5E36F2" size={42} className="mr-3" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iure odit nam accusantium aspernatur.
              </li>
              <li className="flex items-start mb-3">
                <CheckIcon color="#5E36F2" size={42} className="mr-3" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iure odit nam accusantium aspernatur.
              </li>
              <li className="flex items-start">
                <CheckIcon color="#5E36F2" size={42} className="mr-3" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur iure odit nam accusantium aspernatur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
