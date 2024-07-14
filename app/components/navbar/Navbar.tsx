"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { id: 1, title: "Beranda", href: "/" },
    { id: 2, title: "Visi dan Misi", href: "/visi-misi" },
    { id: 3, title: "Sejarah", href: "/sejarah" },
    { id: 4, title: "Adat Istiadat", href: "/adat-istiadat" },
  ];

  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).matches("#hamburger") &&
      !(e.target as HTMLElement).closest("#nav-menu")
    ) {
      setHamburgerActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-yellow">
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className="absolute right-14 block group z-50 py-4 lg:hidden"
        onClick={toggleHamburger}
      >
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-yellow"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-yellow"></span>
        <span className="hamburger-line transition duration-300 ease-in-out group-hover:bg-yellow"></span>
      </button>

      <nav
        className="flex items-center justify-between h-16 px-[2vw] py-4"
        id="nav-menu"
      >
        <div className="flex flex-row gap-3 justify-center items-center">
          <Link href="/">
            <Image
              src="/images/sinjai-logo.png"
              width={35}
              height={15}
              alt="Logo Sinjai"
            />
          </Link>
          <h1 className="text-green font-bold text-xl">Desa Tellulimpoe</h1>
        </div>
        <section
          className={`flex flex-col px-4 py-4 gap-2 absolute rounded-lg right-[3.5rem] top-14 w-[250px] lg:w-fit lg:gap-8 lg:px-0 lg:bg-transparent lg:flex-row bg-yellow text-green ${
            isHamburgerActive ? "" : "hidden"
          } lg:flex lg:static`}
        >
          {navItems.map((link) => (
            <Link key={link.id} href={link.href}>
              <span
                className={`text-sm ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "font-bold"
                    : "hover:text-green-hover"
                }`}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
