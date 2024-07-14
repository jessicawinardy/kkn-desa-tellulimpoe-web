import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import KegiatanDashboard from "./components/kegiatanDashboard";
import SejarahDashboard from "./components/sejarahDashboard";
import VisiDashboard from "./components/visiDashboard";
import MisiDashboard from "./components/misiDashboard";
import GaleriDashboard from "./components/galeriDashboard";
import JarakDashboard from "./components/jarakDashboard";
import IklimDashboard from "./components/iklimDashboard";
import MapsDashboard from "./components/mapsDashboard";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex mx-[4vw] gap-[3vw]">
        <div className=" flex flex-col py-[7vh] gap-10">
          <KegiatanDashboard />
          <SejarahDashboard />
          <VisiDashboard />
          <MisiDashboard />
          <GaleriDashboard />
        </div>
        <div className=" flex flex-col py-[7vh] gap-10">
          <JarakDashboard />
          <IklimDashboard />
          <MapsDashboard />
        </div>
      </div>
      <Footer />
    </main>
  );
}
