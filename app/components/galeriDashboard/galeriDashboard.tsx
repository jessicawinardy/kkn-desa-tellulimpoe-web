"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GaleriDashboard() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Galeri Foto</p>
      </div>
      <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
        <Carousel
          selectedItem={selectedItem}
          onChange={setSelectedItem}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
          className="w-full max-h-96"
        >
          <div className="relative w-full h-80">
            <img
              src="/images/upacara.jpeg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              src="/images/gerak-jalan.jpeg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full h-80">
            <img
              src="/images/panen-raya.jpeg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
        <ul className="flex justify-center mt-4 gap-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <li
              key={index}
              className={`${
                selectedItem === index
                  ? "bg-green w-3 h-3 rounded-full"
                  : "bg-gray-300 w-3 h-3 rounded-full"
              } cursor-pointer`}
              onClick={() => setSelectedItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GaleriDashboard;
