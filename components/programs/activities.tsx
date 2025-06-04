import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { programs } from "@/data/data";

export default function Activities() {
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  rounded-lg  w-2/3 items-center justify-center">
      {programs.map((program: any) => (
        <Card className="rounded-2xl h-[15rem] w-[25rem]" key={program.id}>
          <CardHeader>
            <CardTitle>{program.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <h1>{program.description}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
