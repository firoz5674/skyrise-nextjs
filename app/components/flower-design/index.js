import { flowerGrid } from "@/app/data";
import Link from "next/link";
import React from "react";

const FlowerDesign = () => {
  return (
    <section className="py-[100px] relative flower-design">
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
                    <p className="mb-0 font-semibold">{item.text1}</p>
                    <h3>{item.text2}</h3>
                  </div>
                );
              })}
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div className="flower-circle text-[12px] w-24 h-24 rounded-full bg-white shadow-main-shadow z-30 flex justify-center items-center">Since 1998</div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5">
            <div className="ml-[30px] flex justify-center items-start flex-col h-full">
              <h2>Our Top Designs</h2>
              <p className="mb-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum repellat esse labore, vel magnam quidem tempore
                doloribus, optio vero ratione dolores in id maiores odit ad odio
                cumque qui tenetur.
              </p>
              <Link href="" className="btn btn-primary">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowerDesign;
