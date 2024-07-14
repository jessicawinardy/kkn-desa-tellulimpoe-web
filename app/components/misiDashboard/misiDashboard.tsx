"use client";
import Link from "next/link";
import React from "react";

function MisiDashboard() {
  const sejarahLink = "/visi-misi";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-3">
        <div className="bg-yellow w-1"></div>
        <p className="text-green font-bold text-2xl">Misi Desa Tellulimpoe</p>
      </div>

      <div className="px-[3vw]">
        <ul className="list-disc">
          <li>
            Meningkatkan Pembangunan Infrastruktur untuk mendukung laju
            Perekonomian Desa, seperti : Jalanan, Jembatan, Irigasi dan
            Infrastruktur lainnya yang Aksesible.
          </li>
          <li>
            Meningkatkan Pelayanan Pemenuhan Hak – Hak Dasar Masyarakat baik di
            Sektor Kesehatan dan Pendidikan untuk meningkatkan derajat Kesehatan
            dan Pendidikan agar memiliki daya saing dan derajat harapan Hidup
            meningkat.
          </li>
          <li>Pembangunan Infrastruktur Dasar ...</li>
        </ul>
      </div>

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

export default MisiDashboard;
