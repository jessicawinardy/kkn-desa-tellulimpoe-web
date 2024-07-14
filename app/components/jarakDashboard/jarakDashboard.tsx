"use client";
import React from "react";

function JarakDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Jarak dari Sinjai Utara</p>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-7 min-w-[14vw] min-h-[12vh] border-2 border-gray-300 shadow-md max-w-[14vw] max-h-[12vh] justify-center items-center rounded-2xl">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#02682E"
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
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                <path d="M8.365 10L11.2 8H17v2h-5.144L9 12H2v-2h6.365zm.916 5.06l2.925-1.065.684 1.88-2.925 1.064a4.5 4.5 0 1 1-.684-1.88zM5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM4 11h6l2.6-1.733.28-1.046 1.932.518-1.922 7.131-1.822-.888.118-.44L9 16l-1-2H4v-3zm12.092-5H20v3h-2.816l1.92 5.276-1.88.684L15.056 9H15v-.152L13.6 5H11V3h4l1.092 3z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <div className="flex flex-col justify-center items-center">
            <p className="text-green font-bold text-xl">26 KM</p>
            <p className="text-orange font-semibold text-sm">49 Menit</p>
          </div>
        </div>
        <div className="flex gap-5 min-w-[14vw] min-h-[12vh] border-2 border-gray-300 shadow-md max-w-[14vw] max-h-[12vh] justify-center items-center rounded-2xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#"
            className="w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                fill="#02682E"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col justify-center items-center">
            <p className="text-green font-bold text-xl">31 KM</p>
            <p className="text-orange font-semibold text-sm">1 Jam 3 Menit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JarakDashboard;
