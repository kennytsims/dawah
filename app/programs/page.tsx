import React from "react";
import Header from "@/components/programs/header";
import Activities from "@/components/programs/activities";

export default function Programs() {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center ">
        <Activities />
      </main>
    </div>
  );
}
