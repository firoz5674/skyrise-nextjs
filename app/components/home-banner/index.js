import Image from "next/image";
import React from "react";
import bannerBg from "../../assets/images/home/banner-bg.png";
import Link from "next/link";
import banner from "../../assets/images/home/banner.png";
import { bannerServiceImages } from "@/app/data";
import service1 from "../../assets/images/building.png";
import service2 from "../../assets/images/home-reno.png";

const HomeBanner = () => {
  return (
    <section className="relative bg-[hsl(210,25%,97%,1)] z-10 py-[30px] lg:pt-[90px] lg:pb-[110px] lg:px-0">
      <Image
        src={bannerBg}
        className="w-full z-[-1] h-full absolute top-[50%] object-cover translate-y-[-50%]"
        priority
        alt=""
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[100%] px-4 lg:px-0">
            <h1 className="text-[36px] md:text-[44px] lg:text-[60px] xl:text-[70px] leading-[1.26] capitalize font-bold">
              500+ projects <br />
              delivered successfully 
            </h1>
            <p className="mb-10">
              At <strong>Skyrise</strong>, we turn ideas into reality. Whether you’re looking to build a new space, renovate an existing one, or design interiors that reflect your style, our team of experienced professionals is here to help.
            </p>
            <div className="flex items-center flex-wrap mb-16">
              {bannerServiceImages.map((item) => {
                return (
                  <div key={item} className="mr-4">
                    <div className="w-[64px] h-[64px] mb-4 bg-white rounded-full shadow-light-shadow flex justify-center items-center">
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
            <Link href="#contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>
          <div className="relative mt-16 lg:mt-0">
            <Image
              src={banner}
              className="w-full h-[340px] sm:h-[380px] md:h-[430px] lg:h-[600px] object-contain max-w-full"
              alt=""
              priority
            />
            <Image
              src={service2}
              className="w-[70px] h-[70px] up-anim hidden lg:block"
              alt=""
              priority
            />
            <div className="zoom-box hidden lg:flex">
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
