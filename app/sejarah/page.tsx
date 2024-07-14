import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col mx-[4vw] gap-[3vw] py-[7vh]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-3">
            <div className="bg-yellow w-1"></div>
            <p className="text-green font-bold text-2xl">
              Sejarah Terbentuknya
            </p>
          </div>

          <p className="px-[3vw] text-justify">
            Terungkap dalam cerita rakyat bahwa sekitar abad ke 18 Desa Tellu
            limpoe (Sebelumnya Desa Mannanti) ini telah didiami dan diprakarsai
            oleh keturunan Kerajaan Tondong yaitu Puang Laijo. Puang Laijo ini
            sebagai peletak dasar pemukiman di Laha-Laha yang sampai sekarang
            ini atau daerah ini maju dengan pesatnya, Khususnya disektor
            Pertanian dan Perkebunan. Adapun maksud kedatangannya adalah untuk
            berburu dan meramu ditempat yang sangat didominasi oleh populasi
            Rusa.
          </p>
          <p className="px-[3vw] text-justify">
            Namun dilain pihak ada yang mengatakan bahwa kedatangan orang-orang
            Tondong, bermaksud untuk menjaga Daerah perbatasan Kerajaan Tondong,
            sehingga yang datang atau yang dikirim oleh Raja untuk didaerah ini
            adalah orang MASE’GGE (Orang yang berkekuatan sebagai pagar lintas
            batas antara Kerajaan Kajang (Ammatoa) dan Tondong). Kedatangan
            orang Tondong yang berkelompok ini akhirnya membuka pemukiman di
            Laha-Laha (Laha-Laha adalah Ibukota Desa Tellu limpoe) yang
            berbatasan langsung dengan Daerah Kerajaan Kajang (Ammatoa), Istilah
            Laha-Laha menurut orang bugis adalah ditahan, kemungkinan besar
            bahwa antara orang Kajang (Ammatoa) harus ditahan manakala ia akan
            lintas ke Daerah kerajaan Tondong.
          </p>
          <p className="px-[3vw] text-justify">
            Pada Tahun 1980 Laha-Laha menjadi salah satu Daerah Transmigrasi,
            dari kedatangan Transmigrasi ini didominasi oleh 3 asal yakni
            Sinjai, Bulukumba dan Selayar, yang mendiami Daerah ini dengan
            budaya dan adat istiadat yang berbeda waupun dilain pihak ada
            kesamaan alirannya, melahirkan kebudayaan baru yang tidak jauh dari
            sistem adat yang ada di Tondong, Bulo-Bulo dan Lamatti. Kedatangan
            Transmigrasi ini menggambarkan dengan sangat terbuka menerima
            kedatangan orang dari luar untuk bermukim didaerah ini guna
            memamfaatkan lahan yang sangat subur, kedatangan orang-orang ini
            sebagai cikal bakal lahirnya Tellu limpoe karena 3 penjuru yang
            datang dengan kelebihan masing-masing budaya dan adat istiadat
            sehingga ketiganya ini melahirkan kebudayaan baru yang kita kenal
            dengan Tellu limpoe.
          </p>
          <p className="px-[3vw] text-justify">
            Nama Tellu limpoe Lahir tidak terlepas dari Nama Kerajaan Tellu
            limpoe (Tondong, Bulo-Bulo, Lamatti) salah satu Pejuang yang Kokoh,
            Pemberani mempertahankan Daerah Perbatasan adalah Puang Laijo dan
            sebagai mitos, bukti sejarah adalah Kuburan Puang Laijo yang
            terletak disebelah Selatan Jazirah Mannanti (Dusun Laha-Laha)
            sekarang Ibu Kota Desa Tellu limpoe. Pada Tahun 1985 Desa Mannanti
            (Sekarang Kelurahan mannanti) dimekarkan dan Desa Tellu limpoe
            merupakan salah satu Desa dari hasil Pemekaran tersebut.
          </p>
        </div>
        <div className="flex justify-left items-center py-4">
          <Link href="/">
            <div className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
                className="w-7"
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
                    d="M15 7L10 12L15 17"
                    stroke="#a3a3a3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <button className="text-gray-400 font-semibold text-lg">
                Kembali ke Beranda
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
