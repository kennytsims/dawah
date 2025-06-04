import React from "react";
import Image from "next/image";

export default function News() {
  return (
    <div className="h-[40rem] w-3/4 bg-radial-[at_40%_50%] from-yellow-200 via-green-100 to-indigo-100 to-90% ">
      <h1 className="text-4xl text-center m-10">News & Stories</h1>
      <div>
        <h1></h1>
        <Image
          src="/pictures/gallery/marriageSupport.jpg"
          alt="marriage support"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
