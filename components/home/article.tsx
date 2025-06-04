import Image from "next/image";
import React from "react";
export default function Article() {
  return (
    <main>
      <div className=" flex items-center  justify-center lg:h-[35rem] w-full bg-stone-200 ">
        <div className="flex  flex-col-reverse lg:flex-row h-[50rem]  lg:h-[30rem] lg:w-2/3 w-full justify-center m-5  border-green-400  bg-white border-15 items-center      shadow-2xl">
          <div className="  m-10   sm:w-full">
            <div className=" w-full">
              <h1 className="text-2xl text-center m-5">
                Making an Impact Through Social Events
              </h1>

              <p className="text-lg m-5">
                Gaborone native muslim community took an opportunity on the day
                of eid-ul-fitr to have an outing at Gaborone game reserve. It
                was a day of celebration, reflection and gratitude.
              </p>
            </div>
          </div>
          <div className="m-10">
            <Image
              src="/pictures/gallery/gameEid.jpg"
              alt="eid"
              height={1000}
              width={1000}
              className="shadow-2xl h-[20rem] w-[60rem] "
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center  justify-center lg:h-[35rem] w-full bg-lime-200 mt-10 ">
        <div className="flex flex-col-reverse h-[60rem] md:h-[70rem] lg:h-[30rem] lg:w-2/3 sm:w-full justify-center m-5 border-blue-800  bg-white border-15 items-center lg:flex-row    shadow-2xl ">
          <div className=" m-10 sm:w-full">
            <h1 className="text-2xl text-center m-5">
              Merging islamic knowledge & Sports
            </h1>
            <p className="text-lg m-5">
              Sports and Games are effective activities in caltivating and
              Fostering love and friendly relation especially among the
              youth.Using sports and games to Create a vibrant learning
              enviroment for islamic knowledge and an alternative to illicit
              activities such as drug use. an illustration of Teaching youth the
              principle of protecting each other against evil using sports and
              games.
            </p>
          </div>
          <div className="m-10">
            <Image
              src="/pictures/gallery/toughGames.jpg"
              alt="eid"
              height={1000}
              width={1000}
              className="shadow-2xl "
            />
          </div>
        </div>
      </div>
    </main>
  );
}
