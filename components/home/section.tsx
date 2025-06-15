import React from "react";
import { bonds } from "@/data/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import Image from "next/image";
export default function Section() {
  return (
    <section className=" h-[120rem] lg:h-[45rem] w-full">
      <div className=" w-full flex justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {bonds.map((bond) => (
            <Card
              className=" w-[23rem] flex  shadow-2xl   items-center justify-center"
              key={bond.id}
            >
              <Image
                src={bond.image}
                height={300}
                width={300}
                alt="bonds"
                className=""
              />
              <CardTitle>{bond.title}</CardTitle>
              <CardDescription className="mx-5">
                {bond.description}
              </CardDescription>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
