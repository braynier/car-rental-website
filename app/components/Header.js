"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BiX, BiMenuAltRight } from "react-icons/bi";

import Searchmobile from "./Searchmobile";
import { useSearch } from "../context/searchContext";

function Header() {
  const { setSearchActive } = useSearch();
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const dekstopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(function () {
    const handleScroll = () => {
      if (window.scrollY > 40) setHeader(true);
      else setHeader(false);

      if (window.scrollY > 800) setSearchActive(true);
      else setSearchActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${header ? "bg-white py-2 shadow-md" : "bg-transparent py-4 shadow-none"} fixed z-20 mx-auto w-full max-w-[1920px] transition-all duration-300`}
    >
      <div className="mx-auto flex flex-col xl:container xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between px-4">
          <Link
            className="cursor-pointer"
            to="home"
            smooth={dekstopMode}
            spy={true}
          >
            <Image
              src={"/icons/Logo_website.svg"}
              width={194}
              height={64}
              alt="Logo of the website"
            />
          </Link>
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        <nav
          className={`${nav ? "max-h-max px-4 py-8 xl:px-0 xl:py-0" : "max-h-0 xl:max-h-max"} flex w-full flex-col gap-y-6 overflow-hidden bg-white text-center text-sm font-bold uppercase transition-all duration-150 xl:h-max xl:w-max xl:flex-row xl:gap-x-8 xl:bg-transparent xl:pb-0 xl:text-left xl:text-[15px] xl:font-medium xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Why us?
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonials"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
          <Link
            className="btn btn-primary btn-sm mx-auto max-w-[164px] xl:hidden"
            to="/"
            activeClass="active"
            smooth={dekstopMode}
            spy={true}
          >
            See all cars
          </Link>
          <Searchmobile />
        </nav>
      </div>
    </header>
  );
}

export default Header;
