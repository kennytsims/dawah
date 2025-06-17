import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center items-center  h-screen  lg:h-[40rem] sm:h-screen bg-[url(/pictures/light.png)] bg-cover bg-no-repeat bg-center max-w-fullmt-10">
      <div className="h-[30rem] mt-10">
        <h1 className="text-4xl font-bold text-white text-center">
          Illuminating Every Heart with word of Allah | Islam
        </h1>
        <h4 className="text-3xl text-white text-center">
          From Darkness to Light
        </h4>
        <div className=" m-auto h-[13rem] w-[30rem] lg:w-[35rem]   relative  lg:right-[30rem]">
          <p className="text-2xl text-white mt-10">
            Botswana is a fertile ground for Islam to take root; Sowing and
            cultivating Islam in heart of the people is what will make the
            country blossom.
          </p>
          <div className="bg-[url('/pictures/gallery/eidSalah.jpg')] h-[23rem] max-w-[30rem]  relative lg:left-[60rem] bg-cover bg-no-repeat bg-center shadow-2xl m-5">
            <h1 className="bg-black h-10 opacity-[0.6] w-full text-white text-2xl ">
              Unity through Festives such as Eid-ul-Fitr
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
