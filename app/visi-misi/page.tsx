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
              Visi Desa Tellulimpoe
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="max-w-[45vw] px-[5vw] py-[5vh] bg-lightYellow rounded-lg border-2 border-green text-green font-semibold text-lg text-center">
              “ Terwujudnya Desa Tellu Limpoe yang Bermartabat Bersih, Mandiri,
              Tertata, Beradat dan Terdepan dalam Pelayanan ”
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-3">
            <div className="bg-yellow w-1"></div>
            <p className="text-green font-bold text-2xl">
              Misi Desa Tellulimpoe
            </p>
          </div>

          <div className="px-[3vw]">
            <ul className="list-disc">
              <li>
                Meningkatkan Pembangunan Infrastruktur untuk mendukung laju
                Perekonomian Desa, seperti : Jalanan, Jembatan, Irigasi dan
                Infrastruktur lainnya yang Aksesible.
              </li>
              <li>
                Meningkatkan Pelayanan Pemenuhan Hak – Hak Dasar Masyarakat baik
                di Sektor Kesehatan dan Pendidikan untuk meningkatkan derajat
                Kesehatan dan Pendidikan agar memiliki daya saing dan derajat
                harapan Hidup meningkat.
              </li>
              <li>Pembangunan Infrastruktur Dasar</li>
              <li>Peningkatan Keamanan dan Kenyamanan</li>
              <li>
                Meningkatkan Pembangunan di Bidang Pendiddikan untuk mendorong
                Peningkatan Kualitas Sumber Daya Manusia, baik sebagai tenaga
                Pendidik ataupun sebagai Anak Didik
              </li>
              <li>
                Meningkatkan Pembangunan ekonomi dengan mendorong Peningkatan
                Sumber Daya Manusia agar pelaku Ekonomi dapat Berinovasi dan
                Kreatif dalam Proses Produksi, Pengelolaan dan Distribusi Hasil
                Pertanian dan Perkebunan
              </li>
              <li>
                Mendorong Peningkatan Sumber Daya Manusia seluruh Struktur
                Kelembagaan guna untuk meningkatkan kualitas SDM Pengurus dan
                anggota Kelembagaan yang ada di Desa Tellu Limpoe.
              </li>
              <li>
                Menciptakan Tata Kelolah Pemerintah yang baik ( Good Governance
                ) dan Bersih ( Clean Governance ) berdasarkan nilai Demokrasi,
                Transparansi, Akuntabel, berkeadilan, Berkesetaraan Gender, Guna
                menciptakan Pelayanan yang berkualitas dan Inklusi.
              </li>
              <li>
                Mendorong Pengelolaan dan Pelestarian Sumber Daya Alam untuk
                pemenuhan kebutuhan Masyarakat dan pemerataan Pembangunan yang
                berkelanjutan guna untuk meningkatkan Perekonomian seluruh
                Lapisan Masyarakat.
              </li>
              <li>
                Mendorong Partisipasi Masyarakat dalam Proses Pembangunan.
              </li>
              <li>Menjaga dan Melestarikan nilai Budaya Lokal.</li>
            </ul>
          </div>
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
