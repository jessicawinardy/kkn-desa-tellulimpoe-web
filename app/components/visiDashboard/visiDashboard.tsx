"use client";
import React from "react";

function VisiDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Visi Desa Tellulimpoe</p>
      </div>
      <div className="flex justify-center items-center ">
        <p className="max-w-[45vw] px-[5vw] py-[5vh] bg-lightYellow rounded-lg border-2 border-green text-green font-semibold text-lg text-center">
          “ Terwujudnya Desa Tellu Limpoe yang Bermartabat Bersih, Mandiri,
          Tertata, Beradat dan Terdepan dalam Pelayanan ”
        </p>
      </div>
    </div>
  );
}

export default VisiDashboard;
