import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero.jpeg")' }}
    >
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 h-8 flex items-center justify-center">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee text-white text-md font-medium">
            Selamat Datang di Website Desa Tellulimpoe Kecamatan Tellulimpoe
            Kabupaten Sinjai Provinsi Sulawesi Selatan
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
