"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tongleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex items-center justify-between  text-xl  h-24 w-full bg-white border-b-2 border-b-slate-50 shadow-xl fixed z-10">
      <div className="">
        <Link href="/">
          <Image
            src={"./pictures/logo.jpg"}
            width={100}
            height={100}
            alt="logo"
            className="ml-20 shadow-md"
          />
        </Link>
      </div>
      <ul className="hidden sm:flex items-center justify-center gap-6 text-2xl w-full h-16 ">
        <li>
          <Link
            href="/"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-green-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-green-900"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/programs"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-green-900"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            href="/Publications"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-green-900"
          >
            Publications
          </Link>
        </li>
        <li>
          <Link
            href="/Events"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-green-900"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            href="/Contacts"
            className="hover:border-b-4 hover:border-green-900 pb-4 hover:text-shadow-green-900"
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div onClick={tongleMenu} className="md:hidden cursor-pointer sm:flex">
        <AiOutlineMenu size={24} className="shadow-md shadow-white m-4" />
      </div>
      <div
        className={
          menuOpen
            ? "absolute top-0 left-0 sm:hidden z-40 bg-green-900 opacity-95 w-[65%] text-white h-screen ease-in duration-500"
            : "left-[-100] top-0 hidden ease-in duration-500"
        }
      >
        <div onClick={tongleMenu} className="flex justify-end">
          <AiOutlineClose size={25} />
        </div>
        <div>
          <ul className=" sm:hidden md:hidden flex flex-col items-center  mt-16 gap-5">
            <li onClick={() => setMenuOpen(false)} className=" text-white">
              <Link
                href="/"
                className=" hover:border-2 hover:border-green-900 hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-28 py-2  w-full"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className=" ">
              <Link
                href="/about"
                className=" hover:border-2  hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-28 py-2 hover:border-green-900 "
              >
                About
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className=" ">
              <Link
                href="/programs"
                className="hover:border-2  hover:border-green-900   hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-28 py-2"
              >
                Programs
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className=" ">
              <Link
                href="/Publications"
                className="hover:border-2  hover:border-green-900   hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-26 py-2"
              >
                Publications
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className=" ">
              <Link
                href="/events"
                className="hover:border-2  hover:border-green-900   hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-28 py-2"
              >
                Events
              </Link>
            </li>
            <li onClick={() => setMenuOpen(false)} className=" ">
              <Link
                href="/contact"
                className="hover:border-2  hover:border-green-900   hover:bg-white hover:shadow-lg hover:text-green-900 
          hover:rounded-lg ease-in duration-500 px-28 py-2"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link href={""}>
                <FaFacebookF
                  size={50}
                  color="white"
                  className=" m-2 inline p-3 border-2 border-white rounded-full cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FaXTwitter
                  size={50}
                  color="white"
                  className=" m-2 inline p-3 cursor-pointer border-2 border-white rounded-full"
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <FaInstagram
                  size={50}
                  color="white"
                  className="m-2 inline p-3 border-2 border-white rounded-full cursor-pointer "
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
