import { flowerGrid } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import featurePattern from "../../assets/images/flower-left-pattern.png"

const FlowerDesign = () => {
  return (
    <section className="py-[120px] relative flower-design" id="projects">
      <Image
        src={featurePattern}
        className="w-1/2 h-full absolute top-[0%] object-cover z-[-1] translate-y-[0%]"
        priority
        alt=""
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-6 relative">
            <div className="grid grid-cols-2">
              {flowerGrid.map((item) => {
                return (
                  <div
                    key={item}
                    className="bg-red-300 flex justify-center flex-col items-center aspect-square"
                    style={{
                      borderRadius: item.borderRadius,
                      backgroundColor: item.bgColor
                    }}
                  >
                    <p className="mb-0 font-semibold text-[15px] lg:text-[20px]">{item.text1}</p>
                    <h3 className="leading-0 m-0 lg:my-[1.25rem]">{item.text2}</h3>
                  </div>
                );
              })}
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div className="flower-circle text-[10px] lg:text-[12px] w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white shadow-main-shadow z-30 flex justify-center items-center">Since 1998</div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5">
            <div className="ml-0 lg:ml-[60px] flex justify-center items-start flex-col h-full">
              <h2>Elevate Your Space: Where Design Meets Durability</h2>
              <p className="mb-10">
                We combine innovative interior design with expert residential construction services to bring your vision to life. From modern home designs to sustainable building solutions, we create spaces that inspire and endure.
              </p>
              <Link href="/about" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowerDesign;
