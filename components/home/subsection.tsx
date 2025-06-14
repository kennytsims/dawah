import React from "react";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { FaUsersGear } from "react-icons/fa6";

export default function Subsection() {
  return (
    <div className=" h-[155rem] md:h-[100rem] lg:h-[70rem]  bg-radial-[at_40%_50%] from-lime-100 via-red-50 to-green-100 to-90% curved-bottom-edges   ">
      <div className=" m-10 lg:m-auto max-w-full lg:w-3/4  ">
        <h1 className="text-3xl font-bold  text-center pt-20">
          How are we transforming the future of Islam in Botswana
        </h1>
        <p className="text-2xl mt-10 ">
          Since the first Muslims set foot in Botswana around the 1960s, there
          has been no sustained, coordinated effort to actively spread Islam
          among the native Batswana population. As a result, the indigenous
          Muslim community remains miniscule. It is estimated that the entire
          Muslim population in Botswana is around 20,000 out of a national
          population of approximately 2 million and native Batswana are
          estimated to be around 1000. Islam in Botswana has largely been shaped
          and maintained by people of Indian descent—descendants of the early
          Muslim migrants from the 1960s as well as expatriate communities.
          Among Black Muslims in Botswana, many are foreign nationals, with only
          a small number being native Batswana. This demographic reality has
          contributed to a widespread perception that Islam is an 'Indian
          religion,' rather than a universal faith. Consequently, Islam remains
          largely misunderstood by the majority of Batswana.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-full m-5  justify-center">
        <div className="   bg-white shadow-2xl rounded-md m-5 flex-1/2">
          <FaUsersGear size={60} color="green" className="m-auto" />
          <h1 className="text-center text-2xl m-5">
            Structured Dawah programs
          </h1>
          <p className="m-3">
            While Islam continues to be the fastest-growing religion worldwide,
            Botswana has not experienced similar growth. This highlights the
            urgent need for a well-planned, strategic dawah initiative that can
            make a meaningful impact through education, outreach, and engagement
            tailored to the local context
          </p>
        </div>
        <div className="   bg-white shadow-2xl rounded-md m-5 flex-1/2">
          <IoIosPeople size={60} color="green" className="m-auto" />
          <h1 className="text-center text-2xl m-5">Community Building</h1>
          <p className="m-5">
            For many reverts, embracing Islam is only the beginning of a long
            journey. Unfortunately, once they enter the fold of Islam, they
            often encounter a lack of structured support, guidance, and
            accessible learning resources. A guiding hand—tshipidi—is essential
            to help them navigate this path with confidence and consistency.
            Building an organized and inclusive community that offers mentorship
            and emotional support is vital for the successful integration and
            growth of new Muslims
          </p>
        </div>

        <div className=" bg-white shadow-2xl rounded-md m-5 flex-1/2">
          <FaRegHandshake size={60} color="green" className="m-auto" />
          <h1 className="text-center text-2xl m-5">Social Cohesion</h1>
          <p className="m-3">
            Many people who embrace Islam come from non-Islamic backgrounds and
            families. As such, they continue to live and interact daily with
            non-Muslims in their homes, workplaces, and communities. It is
            therefore essential to develop Islamic programs that promote mutual
            understanding, peaceful coexistence, and respectful engagement with
            the broader society.
          </p>
        </div>
      </div>
    </div>
  );
}
