import React from "react";
import { FaEye } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { FaHands } from "react-icons/fa";
export default function Mission() {
  return (
    <article className="flex  items-center justify-center">
      <div className=" grid sm:grid-cols-1 lg:grid-cols-[1fr,1fr,2fr] m-16 w-3/4  p-10 ">
        <div className="shadow-2xl">
          <FaEye size={50} color="red" className="m-auto mt-5" />
          <h1 className="text-2xl text-center font-bold m-3">Vision</h1>
          <p className="m-5 ">
            Dawah unit vision is to see botswana indigenous muslim community
            being self saficient in every spheres of their life
          </p>
        </div>
        <div className="shadow-2xl">
          <MdRocketLaunch size={50} color="red" className="m-auto mt-5" />
          <h1 className="text-2xl font-bold text-center m-3">Mission</h1>
          <p className="m-5">
            Dawah unit mission be part of building a vibrant united islamic
            community which lives by the values of islam and be an example pure
            islam to the wider society.
          </p>
        </div>
        <div className=" shadow-2xl">
          <FaHands size={50} color="red" className="m-auto mt-5" />
          <h1 className="text-2xl text-center font-bold m-3">Values</h1>
          <p className="mx-10 my-5">
            The attitudes,behaviours and characteristics that reflects islam.
          </p>
          <ul className="mx-5">
            <li className="mx-5">
              <span className="font-bold ">Excellence:-</span>Effectiveness in
              reponsponding to the needs of the members and stakeholders.
            </li>
            <li className="mx-5">
              <span className="font-bold">Good Ethical Conduct(Botho):-</span>
              accountability , transparency , fairness and Intergrity
            </li>
            <li className="mx-5">
              <span className="font-bold">Teamwork Player:-</span>
              collaboration, cooperation, and information sharing.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
