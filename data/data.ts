import { GiSpellBook } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";

import { createElement } from "react";

export const programs = [
  {
    id: 1,
    title: "Engaging Islamic Educational Workshops",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Dive into fascinating Islamic topics in our interactive workshops led by respected scholars.Join the conversation and engage in critical thinking.",
  },
  {
    id: 2,
    title: "Inspiring Mentorship Programs",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "We connect seasoned members with our youth and newcomers to nurture personal growth,enhance leadership skills, and spark community involvement..",
  },
  {
    id: 3,
    title: "Impactful Community Service Projects",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Become a part of something bigger! Join our efforts to address local needs through service initiatives, such as arrangements and negotiations for marriages and funerals, primarily whendealing with non-Muslims. we also do Prison visits to teach our detained brothers and sisters.",
  },
  {
    id: 4,
    title: "Exciting Youth Engagement Activities",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "We’re dedicated to empowering the next generation! Our youth programs emphasize leadership training, sports, arts, and vibrant cultural events.",
  },
  {
    id: 5,
    title: "Family Support Groups",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Strengthening family bonds is what we do best! Our workshops on marital relations,parenting, and family dynamics promote healthy, happy relationships..",
  },

  {
    id: 6,
    title: "Accessible Online Learning Platform",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Enjoy a treasure trove of webinars, courses, and e-books that bring quality education right toyour fingertips!",
  },
  {
    id: 7,
    title: "Engaging Islamic Camps, Retreats, and House-to-House Visits",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Join us in our educational camps in rural villages, followed by house-to-house visits that invite people to Islam.",
  },
  {
    id: 8,
    title: "Media house",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "This is a stragetegy is to use all media platform to deseminate information about islam. this include  old media platform such as radio and print and the new media such as social media ,website.",
  },
];

export const articles = [
  {
    id: 1,
    title: "Knowledge",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Knowledge is at the heart of every endeavour we do and is the one that guide our mission and vision .Equipping muslim community with authentic infomation to implement islamic values in daily life and to have tools to disseminate islam knowledge  to wider community is the cornerstone of our mission.",
  },
  {
    id: 2,
    title: "Collaboration",
    icon: createElement(FaRegHandshake, { size: 60, color: "green" }),
    description:
      "Creating Collaborations and Connections with wider society and organisation such as  government departments ,schools and other institutions to disseminate and autheticate information  about Islam so that when policy and decision are made, they are based on accurate information.",
  },
  {
    id: 3,
    title: " Socialization",
    icon: createElement(IoIosPeople, { size: 60, color: "green" }),
    description:
      "Social events provide an opportunity for muslim community to meet and connect with each other to build and maintain strong bonds of brotherhood and sitsterhood among themeselves.These may include but not limited to eid festivites,marriages celebrations and funerals.",
  },
  {
    id: 4,
    title: " Safety Nets",
    icon: createElement(FaPeopleRoof, { size: 60, color: "green" }),
    description:
      "Government provides various social safety nets, such as old age pension, poverty alleviation, and child support grants, but still remain specific need which should be tailored for the islamic comunity. Marriage counselling ,divorce, inheritance and family disputes are specific therefore islamic issues it best handled by islamic institutions.",
  },
];

export const bonds = [
  {
    id: 1,
    image: "/pictures/gallery/brotherhood.jpg",
    title: "Nurturing  Brotherhood and Sisterhood",
    description:
      "One of the conerstones of a strong community is unity. Allah instucts us to be united.Narturing  brotherhood and sisterhood and creating an environment of love,trust and working together .",
  },
  {
    id: 2,
    image: "/pictures/gallery/islamicMarriage.jpg",
    title: "Building community through Islamic Marriage",
    description:
      "The sunnah of the Prophet Muhammad (PBUH) is to marry young.Encouraging young people to marry early is a way to build a strong community based on good morals and good values. It is also a way to prevention them from falling into the ills of the modern society",
  },
  {
    id: 3,
    image: "/pictures/gallery/culture.jpg",
    title: "Converges of Islam and Batswana Culture",
    description:
      "One of the key values is to understand that islam did not come to erase culture but to perfect it by allowing what is good and refraining from what contradicts Islamic values.  this is more essential beacasuse those who converts come from non-islamic background and continue to interact with non-muslims.",
  },
];
