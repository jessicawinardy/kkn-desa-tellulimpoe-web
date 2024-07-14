"use client";
import Link from "next/link";
import React from "react";

function MapsDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Lokasi Kantor Desa</p>
      </div>
      <div className="flex justify-center">
        <div className="p-[2vw] border-2 border-gray-300 shadow-md rounded-xl inline-block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8007273797766!2d120.24331777451945!3d-5.293764553137066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbc1ecde6e10b8d%3A0xe2e9c9b6676997e3!2sKantor%20Desa%20Tellulimpoe!5e0!3m2!1sen!2sid!4v1720940214593!5m2!1sen!2sid"
            className="border-0 w-full h-64"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapsDashboard;
