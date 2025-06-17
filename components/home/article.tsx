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
                The native Muslim community of Gaborone took the opportunity to
                celebrate Eid-ul-Fitr with an outing at the Gaborone Game
                Reserve. It was a joyful day marked by celebration, reflection,
                and gratitude.
              </p>
            </div>
          </div>
          <div className="m-10">
            <Image
              src="https://kennytsims.github.io/dawah/pictures/gallery/gameEid.jpg"
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
              Sports and games are powerful tools for cultivating friendship,
              unity, and a spirit of cooperation especially among the youth. By
              integrating Islamic values into these activities, we can create a
              vibrant and engaging learning environment that not only promotes
              physical well-being but also serves as a positive alternative to
              harmful behaviors such as drug use. Through sports, we can teach
              young people key Islamic principles, such as protecting one
              another from harm, supporting each other in righteousness, and
              working together as a team. These activities become a practical
              and enjoyable way to instill discipline, moral awareness, and a
              sense of brotherhood rooted in faith.
            </p>
          </div>
          <div className="m-10">
            <Image
              src="https://kennytsims.github.io/dawah//pictures/gallery/toughGames.jpg"
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
