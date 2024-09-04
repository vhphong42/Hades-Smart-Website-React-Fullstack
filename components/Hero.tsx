import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <Image
        src="/slider image 1.webp" // Thay đổi đường dẫn tới hình ảnh của bạn
        layout="fill"
        objectFit="cover"
        alt="background image"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10" style={{ marginLeft: '60%' }}>
          <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
            <h1 className="text-6xl text-black font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
              THE PRODUCT OF THE FUTURE
            </h1>
            <p className="text-black max-sm:text-sm">
              Smart equipment refers to devices and machinery enhanced with advanced technologies such as sensors, connectivity, and artificial intelligence. These devices are designed to interact intelligently with users and their environment, improving efficiency, convenience, and functionality across various applications.
            </p>
            <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
              <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                BUY NOW
              </button>
              <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
