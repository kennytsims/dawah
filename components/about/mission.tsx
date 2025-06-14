import React from "react";
import { FaEye } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { FaHands } from "react-icons/fa";
export default function Mission() {
  return (
    <article className="flex  items-center justify-center">
      <div className=" grid grid-cols-1 lg:grid-cols-[1fr,1fr,2fr] m-16 h-3/4 lg:w-1/2  p-10 ">
        <div className="shadow-2xl">
          <FaEye size={50} color="green" className="m-auto mt-5" />
          <h1 className="text-2xl text-center font-bold m-3">Vision</h1>
          <p className="m-5 ">
            Dawah unit vision is to Botswana indigenous muslim community being
            self saficient in every spheres of their life
          </p>
        </div>
        <div className="shadow-2xl">
          <MdRocketLaunch size={50} color="green" className="m-auto mt-5" />
          <h1 className="text-2xl font-bold text-center m-3">Mission</h1>
          <p className="m-5">
            Dawah unit mission be part of building a vibrant united islamic
            community which lives by the values of islam.
          </p>
        </div>
        <div className=" shadow-2xl">
          <FaHands size={50} color="green" className="m-auto mt-5" />
          <h1 className="text-2xl text-center font-bold m-3">Values</h1>
          <p className="mx-10 my-5">
            The attitudes,behaviours and characteristics that reflects islam.
          </p>
          <ul className="mx-5">
            <li className="mx-5">
              <span className="font-bold ">Excellence(Ihsan):-</span>
              Workship Allah as if you see him.To be the best in evrything we
              do.Effectiveness in reponsponding to the needs of the members and
              stakeholders.
            </li>
            <li className="mx-5">
              <span className="font-bold">Good Ethical Conduct(Botho):-</span>
              accountability , transparency , fairness and Intergrity, compasion
            </li>
            <li className="mx-5">
              <span className="font-bold">Unity(Team player):-</span>
              collaboration, cooperation.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
