import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// IYcYD9rPVqxY2fyu

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Carousel = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full h-screen object-cover"
              src="https://i.ibb.co/5hwBV0W/New-Project-20.jpg"
              alt=""
            />
            
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center w-full bg-slate-100 py-5 bg-opacity-90">
              <h1 className="text-slate-700 text-[35px] md:text-[55px]">
              Join Our Volunteer Community
              </h1>
              <p className="text-slate-600 text-[16px] max-w-[900px] pb-2 mt-2 m-auto">
              Make a Difference Today! Join Our Team of Dedicated Volunteers and Help Us Build a Better World for Everyone. Your Contribution Matters!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full h-screen object-cover"
              src="https://i.ibb.co/RHsSwFq/New-Project-19.jpg"
              alt=""
            />
            
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center w-full bg-slate-100 py-5 bg-opacity-90">
              <h1 className="text-slate-700 text-[35px] md:text-[55px]">
              Volunteer for Change
              </h1>
              <p className="text-slate-600 text-[16px] max-w-[900px] pb-2 mt-2 m-auto">
              Be Part of Something Meaningful. Join Our Team of Volunteers and Help Create Lasting Change in Your Community and Beyond.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-700 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              className="rounded w-full h-screen object-cover"
              src="https://i.ibb.co/sPDFRhZ/New-Project-18.jpg"
              alt=""
            />
            
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%]
            translate-y-[-50%] text-center w-full bg-slate-100 py-5 bg-opacity-90">
              <h1 className="text-slate-700 text-[35px] md:text-[55px]">
              Make a Difference with Us
              </h1>
              <p className="text-slate-600 text-[16px] max-w-[900px] pb-2 mt-2 m-auto">
              Join Our Volunteer Team and Make an Impact in Your Community. Together, We Can Create Positive Change and Build a Better Future
              </p>
            </div>
          </div>
        </SwiperSlide>
        

      </Swiper>
    </div>
  );
};

export default Carousel;
