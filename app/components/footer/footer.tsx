"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bottom-0">
      <div className="text-yellow bg-green justify-between footer-padding py-[8vh] px-[4vw]">
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <Image
              src="/images/sinjai-logo.png"
              width={50}
              height={50}
              alt=""
              className="max-w-28 min-w-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Website Desa Tellulimpoe</h1>
            <ul className="text-base">
              <li>Telpon: +62 812-3456-7890</li>
              <li>
                Alamat: Jl. Ketika Cinta Bertemu, Kota Sakit Hati, Provinsi
                Selamat Jalan, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow text-green text-center py-3 px-14">
        <p>Copyright © 2024 Desa Tellulimpoe Kecamatan Tellulimpoe</p>
      </div>
    </div>
  );
}

export default Footer;
