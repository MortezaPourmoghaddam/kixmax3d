import React from "react";
import SodaCanvas from "./3D/SodaCanvas";

const Hero = () => {
  return (
    <div className="flex w-[85%] m-auto">
      <div className="flex-1 flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-[88px] font-black font-['Potk']">
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
        <SodaCanvas />
      </div>
    </div>
  );
};

export default Hero;
