"use client";
import React from "react";

function IklimDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Iklim dan Cuaca</p>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-5 min-w-[14vw] min-h-[12vh] border-2 border-gray-300 shadow-md max-w-[14vw] px-[1vw] max-h-[12vh] justify-center items-center rounded-2xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8 15.9998C7.44772 15.9998 7 16.4475 7 16.9998C7 17.5521 7.44772 17.9998 8 17.9998C8.55228 17.9998 9 17.5521 9 16.9998C9 16.4475 8.55228 15.9998 8 15.9998ZM8 15.9998V6M8 16.9998L8.00707 17.0069M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5ZM12 16.9998C12 19.209 10.2091 20.9998 8 20.9998C5.79086 20.9998 4 19.209 4 16.9998C4 15.9854 4.37764 15.0591 5 14.354L5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V14.354C11.6224 15.0591 12 15.9854 12 16.9998Z"
                stroke="#02682E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <div className="flex flex-col justify-center items-center">
            <p className="text-green font-bold text-lg">21,1 - 32,4°C</p>
            <p className="text-orange font-semibold text-sm">Suhu Rata-Rata</p>
          </div>
        </div>
        <div className="flex gap-5 min-w-[14vw] min-h-[12vh] border-2 border-gray-300 shadow-md max-w-[14vw] max-h-[12vh] justify-center items-center rounded-2xl">
          <svg
            fill="#02682E"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="rain-alt"
            className="icon glyph w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21,9a4,4,0,0,1-4,4H6A3,3,0,1,1,7.08,7.21a5,5,0,0,1,9-2.09A4.08,4.08,0,0,1,17,5,4,4,0,0,1,21,9ZM16.89,21.45l2-4a1,1,0,1,0-1.78-.9l-2,4a1,1,0,0,0,.44,1.34A.93.93,0,0,0,16,22,1,1,0,0,0,16.89,21.45Zm-8,0,2-4a1,1,0,1,0-1.78-.9l-2,4a1,1,0,0,0,.44,1.34A.93.93,0,0,0,8,22,1,1,0,0,0,8.89,21.45Zm5-2,1-2a1,1,0,1,0-1.78-.9l-1,2a1,1,0,0,0,.44,1.34A.93.93,0,0,0,13,20,1,1,0,0,0,13.89,19.45Zm-8,0,1-2a1,1,0,0,0-1.78-.9l-1,2a1,1,0,0,0,.44,1.34A.93.93,0,0,0,5,20,1,1,0,0,0,5.89,19.45Z"></path>
            </g>
          </svg>
          <div className="flex flex-col justify-center items-center">
            <p className="text-green font-bold text-xl">2000 - 4000</p>
            <p className="text-orange font-semibold text-sm">mm per Tahun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IklimDashboard;
