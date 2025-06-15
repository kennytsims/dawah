import React from "react";

import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-green-900  h-[50rem] lg:h-[30rem] w-full flex items-center justify-center flex-col  lg:flex-row ">
      <div className="h-1/3 lg:h-1/2 w-full rounded-edges bg-white flex items-center justify-center flex-col">
        <h1 className="text-2xl text-center text-slate-600">Contact us on</h1>
        <hr className="text-white mb-4" />
        <h3 className="text-slate-600 text-lg">
          <FaWhatsapp size={30} color="green" className=" m-2 inline" />
          +267 78 100 016
        </h3>
        <div className="text-slate-600 text-lg">
          <FaEnvelope size={30} color="green" className=" m-2 inline" />
          info@dawah.org
        </div>
        <h3 className="text-lg text-slate-600">
          <FaLocationDot size={30} color="green" className="m-2 inline" />
          Jamia Mosque,
        </h3>
      </div>
      <div className="h-1/3 lg:h-1/2 w-full bg-greem-900 rounded-edges bg-white flex items-center justify-center flex-col">
        <h1 className="text-2xl text-center text-slate-600">Social</h1>
        <hr className="text-white mb-4" />
        <Link href="/" className=" text-lg">
          <FaFacebookF
            size={50}
            color="green"
            className=" m-2 inline p-3 border-2 border-white rounded-full cursor-pointer"
          />
        </Link>
        <div>
          <FaXTwitter
            size={50}
            color="green"
            className=" m-2 inline p-3 cursor-pointer border-2 border-white rounded-full"
          />
        </div>
        <div>
          <FaInstagram
            size={50}
            color="green"
            className="m-2 inline p-3 border-2 border-white rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
