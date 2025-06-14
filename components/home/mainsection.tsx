import React from "react";
import { articles } from "@/data/data";
import { Button } from "../ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Link from "next/link";

export default async function MainSection() {
  return (
    <div className="  ">
      <div className="lg:h-[30rem] md:h-[60rem] h-[110rem]  w-full flex  justify-center  items-center bg-white mt-20 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-10  border-green-900">
          {articles.map((article: any) => {
            const { id, icon, title, description } = article;
            return (
              <div
                key={id}
                className=" border-0  hover:border-5 hover:border-green-200"
              >
                <Card
                  className=" shadow-lg bg-white lg:h-[27rem] w-[20rem] lg:w-[17rem]"
                  key={id}
                >
                  <CardHeader>
                    <div className="m-auto">{icon}</div>
                    <CardTitle className="text-center m-2">{title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>

                  <CardFooter className="flex justify-center"></CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
