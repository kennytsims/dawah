import React from "react";

export default function Article() {
  return (
    <div className="bg-radial-[at_50%_75%] from-lime-900  via-lime-500 to-green-900 h-[50rem] w-full flex justify-center curved-bottom-edges">
      <div className="grid grid-cols-1 lg:grid-cols-3 m-10 gap-5 justify-center ">
        <div>
          <h1 className="text-white text-3xl">who are we?</h1>
          <p className="text-white">
            Botswana dawah unit is a non profit organisation which focus on
            representing indigenous Batswana muslim community. propage{" "}
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl">why dawah unit?</h1>
          <p className="text-white">
            for a very long time the indigenous have been excluded and
            marginalised in terms of representation in terms islamic
            institutions. institution such as Dawah committee which should run
            and managed by native Batswana since are the one that understand the
            culture and are part of the same community who are given dawah too
            but it is not the case.
          </p>
        </div>
        <div>
          <h1 className="text-white text-3xl">what do we stand for?</h1>
          <p className="text-white">
            Dawah unit stand for justice and unity for{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
