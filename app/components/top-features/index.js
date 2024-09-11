import Image from "next/image";
import React from "react";
import featureBg from "../../assets/images/common/feature-bg2.png";
import spiderLeft from "../../assets/images/common/spider-left.png";
import feature1 from "../../assets/images/feature1.jpg";
import feature2 from "../../assets/images/feature2.jpg";
import feature3 from "../../assets/images/feature3.jpg";
import feature4 from "../../assets/images/feature4.jpg";
import Link from "next/link";

const TopFeatures = () => {
  return (
    <section className="bg-[hsl(210,25%,97%,1)] relative py-[80px] z-1">
      <Image
        src={featureBg}
        className="w-full h-full absolute top-[50%] object-cover translate-y-[-50%]"
        priority
        alt=""
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 place-items-center">
          <div className="col-span-1 md:col-span-5 bg-slate-100">
            <h2>Crafting Spaces, Building Dreams: Our Expertise</h2>
            <p className="mb-5">
              At <strong>Skyrise Construction & Interiors,</strong> we specialize in bringing your vision to life, whether it&apos;s building your dream home, transforming your office, or remodeling your interiors. Our team of experts blends creativity with precision, delivering high-quality construction and interior design services.
            </p>
            <p className="mb-12">
              From custom-built homes to modern commercial spaces, we handle every project with care and craftsmanship. With a commitment to excellence and sustainability, we ensure that your space is functional, beautiful, and built to last.
            </p>
            <Link href="" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="col-span-1 md:col-span-7 w-[80%] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="col-span-1 md:col-span-6">
                <div>
                  <Image
                    src={feature1}
                    className="w-full h-[350px] object-cover rounded-xl border-4 shadow-main-shadow border-gray-100"
                    priority
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-6">
                <div className="mt-10">
                  <Image
                    src={feature3}
                    className="w-full h-[350px] object-cover rounded-xl border-4 shadow-main-shadow border-gray-100"
                    priority
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="col-span-1 md:col-span-6">
                <div>
                  <Image
                    src={feature4}
                    className="w-full h-[350px] object-cover rounded-xl border-4 shadow-main-shadow border-gray-100"
                    priority
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-6">
                <div className="mt-10">
                  <Image
                    src={feature2}
                    className="w-full h-[350px] object-cover rounded-xl border-4 shadow-main-shadow border-gray-100"
                    priority
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src={spiderLeft}
        className="w-full h-auto absolute left-[0%] top-[0%] object-cover"
        priority
        alt=""
      /> */}
    </section>
  );
};

export default TopFeatures;
