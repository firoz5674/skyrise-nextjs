import Image from "next/image";
import React from "react";
import service1 from "../../assets/images/building.png";
import { serviceCard } from "@/app/data";

const ServiceCard = ({ title }) => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCard.map((item) => {
            return (
              <div key={item} className="px-4 py-12 text-center bg-white rounded-xl border-[10px] border-[#fbf1fb]">
                <div className="w-32 h-32 rounded-full mx-auto flex flex-col justify-center items-center bg-[#fff] shadow-main-shadow mb-8">
                  <Image src={item.img} className="mx-auto" priority alt="" />
                </div>
                <h3 className="lg:text-[26px] mb-2">{item.subTitle}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
