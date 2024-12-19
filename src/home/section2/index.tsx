"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { FaHeart } from "react-icons/fa";

export default function Section2() {
  // Array con 10 elementos (puedes usar un número o estructura simple)
  const images = new Array(10).fill("/screenshot.webp");

  return (
    <div className="w-full flex flex-col bg-white py-6">
      <div
        className="w-full flex flex-col gap-10 justify-center items-center bg-blue-lightPastelBlue 
                      p-[8vw] border-blue-blueSoftWater border-y-[2px]"
      >
        <div className="bg-white rounded-xl shadow-full w-[90vw] max-w-4xl h-auto p-[8vw]">
          <div className="w-full">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="flex overflow-x-auto space-x-6 justify-center items-center"
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="flex-none w-[calc(50%-1.5rem)]"
                >
                  <Image
                    src={src}
                    width={1000}
                    height={1000}
                    alt={`screenshot invitApp ${index}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 mt-8">
            <a
              href=""
              className="bg-blue-blueSoftWater p-3 flex justify-center items-center 
                         gap-2 text-white font-[500] rounded-lg"
            >
              VER DISEÑOS CASAMIENTO{" "}
              <span>
                <FaHeart />
              </span>
            </a>
            <a
              href=""
              className="w-[40vw] border-[1px] p-1 border-blue-blueSoftWater text-center rounded-2xl text-blue-blueSoftWater"
            >
              VER PRECIOS
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-full w-[90vw] max-w-4xl h-auto p-[8vw]">
          <div className="w-full">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="flex overflow-x-auto space-x-6 justify-center items-center"
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="flex-none w-[calc(50%-1.5rem)]"
                >
                  <Image
                    src={src}
                    width={1000}
                    height={1000}
                    alt={`screenshot invitApp ${index}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 mt-8">
            <a
              href=""
              className="bg-blue-blueSoftWater p-3 flex justify-center items-center 
                         gap-2 text-white font-[500] rounded-lg"
            >
              VER DISEÑOS CASAMIENTO{" "}
              <span>
                <FaHeart />
              </span>
            </a>
            <a
              href=""
              className="w-[40vw] border-[1px] p-1 border-blue-blueSoftWater text-center rounded-2xl text-blue-blueSoftWater"
            >
              VER PRECIOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
