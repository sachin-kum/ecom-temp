import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="relative  w-full"
        style={{
          backgroundImage:
            "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className=" w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
          <div className="max-w-[800px] py-[4%] lg:py-[8%] xl:py-[14%]">
            <h1 className="text-[30px] lg:text-[40px] xl:text-[55px] leading-[1.2] text-[#3d3a3a] font-[600] capitalize ">
              Best Collection for
              <br /> home Decaration
            </h1>
            <p className="py-[3%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              assumenda? Quisquam itaque exercitationem labore vel, dolore
              quidem asperiores, laudantium temporibus soluta optio consequatur
              aliquam deserunt officia. Dolorum saepe nulla provident.
            </p>
            <Link to="/products" className="inline-block">
              {" "}
              <button className="w-[150px] bg-black h-[50px] text-white flex items-center justify-center rounded-xl cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
