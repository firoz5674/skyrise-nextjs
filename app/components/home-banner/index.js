import Image from "next/image";
import React from "react";
import bannerBg from "../../assets/images/home/banner-bg.png";
import Link from "next/link";
import banner from "../../assets/images/home/banner1.png";
import { bannerServiceImages } from "@/app/data";
import service1 from "../../assets/images/building.png";

const HomeBanner = () => {
  return (
    <section className="relative bg-[hsl(210,25%,97%,1)] z-10 pt-[90px] pb-[110px]">
      <Image
        src={bannerBg}
        className="w-full z-[-1] h-full absolute top-[50%] object-cover translate-y-[-50%]"
        priority
        alt=""
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="w-[100%]">
            <h1 className="text-[70px] leading-[1.26] capitalize font-bold">
              500+ projects <br />
              delivered successfully 
            </h1>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, est ducimus? Quae neque optio rem est, cumque a minima
              non quam facilis omnis dolorum? Quisquam dolore recusandae odit
              mollitia quam?
            </p>
            <div className="flex items-center mb-16">
              {bannerServiceImages.map((item) => {
                return (
                  <div key={item} className="mr-4">
                    <div className="w-[64px] h-[64px] bg-white rounded-full shadow-light-shadow flex justify-center items-center">
                      <Image
                        src={item.img}
                        className="w-[32px] object-contain"
                        alt=""
                        priority
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href="" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="relative">
            <Image
              src={banner}
              className="w-full h-[600px] object-contain"
              alt=""
              priority
            />
            <Image
              src={service1}
              className="w-[70px] h-[70px] up-anim"
              alt=""
              priority
            />
            <div className="zoom-box">
              <p className=" text-white">Since</p>
              <h4 className="text-white mb-0">1998</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
