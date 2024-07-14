"use client";
import Link from "next/link";
import React from "react";

function SejarahDashboard() {
  const sejarahLink = "/sejarah";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Sejarah Terbentuknya</p>
      </div>

      <p className="px-[3vw] text-justify">
        Terungkap dalam cerita rakyat bahwa sekitar abad ke 18 Desa Tellu limpoe
        (Sebelumnya Desa Mannanti) ini telah didiami dan diprakarsai oleh
        keturunan Kerajaan Tondong yaitu Puang Laijo. Puang Laijo ini sebagai
        peletak dasar pemukiman di Laha-Laha yang sampai sekarang ini atau
        daerah ini maju dengan pesatnya, Khususnya disektor Pertanian dan
        Perkebunan. Adapun maksud kedatangannya adalah untuk berburu dan meramu
        ditempat yang sangat didominasi oleh populasi Rusa...
      </p>

      <Link href={sejarahLink}>
        <div className="flex justify-center">
          <button className="bg-green text-yellow w-60 h-12 rounded-3xl font-medium">
            Selengkapnya
          </button>
        </div>
      </Link>
    </div>
  );
}

export default SejarahDashboard;
