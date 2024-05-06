import React, { useRef, useState } from "react";
// Import react Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import envato from "../resources/envato.png";
import { CiLocationOn } from "react-icons/ci";
import ButtonUi from "../Ui/ButtonUi";

import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <IoIosArrowForward
        
        className="w-10 h-10 block  p-2 text-blue-600 bg-white  rounded-full"
      />
      
    
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={` ${className} `}>
      <IoIosArrowBack
        
        className="w-10 h-10 block  p-2 text-blue-600 bg-white  rounded-full"
      />
      
    </div>
  );
}
const CompanyJobSwiper = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow to="prev"/>,
    nextArrow: <SampleNextArrow to="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      name: `John Morgan`,
      img: `/students/John_Morgan.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `/students/Ellie_Anderson.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `/students/Nia_Adebayo.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: `/students/Rigo_Louie.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: `/students/Mia_Williams.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];
  return (
    <div className="w-full mt-20 py-14 px-10  bg-slate-100 mx-auto">
      <div className=" ">
        <Slider {...settings} className="py-1">
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white w-[20px] mb-2 h-[30%] shadow  flex flex-col items-center text-center justify-center text-black rounded-xl"
            >
              <img src={envato} className="mt-14 mx-auto" />
              <h1 className="mt-4 mb-4 text-2xl font-semibold">Envato</h1>
              <p className="text-sm text-slate-500">2 open positions</p>
              {/* Address */}
              <div className="mt-3  text-slate-700 flex justify-center w-full ">
                <CiLocationOn className=" text-2xl" />

                <p className="w-[55%]  px-0 ">
                  Harsh villa pg sector 14 Gurgaon 2 floor 253, +91 0123456789
                </p>
              </div>
              <ButtonUi
                title={"View Jobs"}
                styles={
                  "mt-10 mb-10 mx-auto  w-fit border-blue-600 bg-transparent text-blue-600 "
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanyJobSwiper;
