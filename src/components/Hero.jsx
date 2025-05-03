import React from "react";
import SodaCanvas from "./3D/SodaCanvas";
import { BackgroundEllipse, Ellipse1, Ellipse3, Ellipse4, Ellipse5, Ellipse6 } from "../../public/svg";
import Ellipse from "./utils/Ellipse";

const Hero = () => {
  return (
    <div className="flex w-[85%] m-auto">
      <div className="flex-1 flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-[80px] font-black font-Potk text-nowrap">
          {"نوشیدنی کیکس مکس"}
        </h1>
        <div
          className="flex justify-center items-center
          bg-primary-2 px-16 py-6 rotate-[5deg] -mt-4"
        >
          <h2 className="text-white text-5xl font-Pinar-bold text-center [direction:rtl]">
            {"ترشه ، طبیعیه ، کرم داره!"}
          </h2>
        </div>
        <p className="mt-20 w-3/5 text-center text-white opacity-55">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
        </p>
      </div>
      <div className="flex-1">
        <div className="flex w-full justify-center items-center relative">
          <img className="w-[75%]" src={BackgroundEllipse} alt="" />
          <div className="z-[99999]">
           
          </div>
        </div>
        <SodaCanvas />
      </div>
    </div>
  );
};

export default Hero;
