import Image from "next/image";
import Link from "next/link";
import React from "react";
import personImg from "../../assets/images/person.png"

const CallToAction = () => {
  return (
    <section className="bg-primary-color relative cta p-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 place-items-center">
          <div className="col-span-1 lg:col-span-5">
            <h2 className="text-white mb-14">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </h2>
            <Link href="" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-7">
            <Image
              src={personImg}
              className="w-full h-[400px] pt-7 object-contain"
              priority
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
