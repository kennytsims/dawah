import React from "react";
import Article from "@/components/about/article";
import Mission from "@/components/about/mission";

export default function About() {
  return (
    <div>
      <header className="h-screen w-full bg-[url('/pictures/sujood.jpg')]  bg-no-repeat bg-center bg-cover flex items-center justify-center"></header>
      <article>
        <Article />
      </article>
      <main>
        <Mission />
      </main>
    </div>
  );
}
