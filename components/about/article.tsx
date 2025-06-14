import React from "react";

export default function Article() {
  return (
    <div className="bg-radial-[at_50%_75%] from-lime-900  via-lime-700 to-green-900 h-[50rem] w-full flex justify-center curved-bottom-edges">
      <div className="grid grid-cols-1 lg:grid-cols-3 m-10 gap-5 justify-center ">
        <div className="">
          <h1 className="text-white text-3xl">who are we?</h1>
          <p className="text-white">
            Botswana dawah unit is a non profit organisation which focus on
            representing indigenous Batswana muslim community.
          </p>
        </div>
        <div className="">
          <h1 className="text-white text-3xl">why dawah unit?</h1>
          <p className="text-white">
            "For a long time, indigenous Batswana have been excluded and
            marginalized when it comes to representation within Islamic
            institutions. Committees such as the Dawah commitee which are meant
            to engage directly with local communities—should ideally be led and
            managed by native Batswana, as they possess the cultural
            understanding and lived experience necessary to effectively
            communicate the message of Islam. However, this has not been the
            case. Instead, leadership and decision-making roles in such
            institutions are often dominated by individuals from outside the
            local community. This lack of representation undermines the
            effectiveness of dawah efforts and contributes to the perception
            that Islam is not inclusive of indigenous Batswana."
          </p>
        </div>
        <div className="">
          <h1 className="text-white text-3xl">what do we stand for?</h1>
          <p className="text-white">
            Dawah unit stand for justice and unity and compasion{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
