import { GiSpellBook } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";

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
    title: "Multimedia Outreach",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "A key component of our strategy is to leverage both traditional and digital media to share authentic Islamic knowledge. This includes established platforms like radio and print, alongside contemporary channels such as social media, websites, and other online tools, to reach diverse audiences effectively.",
  },
  {
    id: 9,
    title: "Caring for the Vulnerable",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Visiting the sick and those in prisons is a key part of our program. It is a way to show compassion and care for those who are vulnerable in our society. We believe that by visiting the sick and those in prisons, we can help to uplift their spirits and provide them with the support they need.",
  },
];

export const articles = [
  {
    id: 1,
    title: "Knowledge",
    icon: createElement(GiSpellBook, { size: 60, color: "green" }),
    description:
      "Knowledge(Quran & Sunnah) lies at the heart of all our endeavours, guiding both our mission and vision. Equipping the Muslim community with authentic information empowers individuals to live by Islamic values in their daily lives. Furthermore, providing the tools to share this knowledge with the wider society is a cornerstone of our mission.",
  },
  {
    id: 2,
    title: "Collaboration",
    icon: createElement(FcCollaboration, { size: 60, color: "green" }),
    description:
      "Fostering collaborations and connections with broader society,including government departments, schools, and other institutions is essential to disseminate and authenticate  information about Islam. This ensures that policies and decisions are made based on informed and accurate information .",
  },
  {
    id: 3,
    title: " Socialization",
    icon: createElement(IoIosPeople, { size: 60, color: "green" }),
    description:
      "Social gatherings provide opportunities for social interactions and community building. They play a vital role in bringing the Muslim community together, helping to build and sustain strong bonds of brotherhood and sisterhood. Such events include, but are not limited to, Eid celebrations, weddings, and funerals.",
  },
  {
    id: 4,
    title: " Safety Nets",
    icon: createElement(FaPeopleRoof, { size: 60, color: "green" }),
    description:
      "While the government provides various social safety nets—such as old age pensions, poverty alleviation programs,there remain specific needs within the Muslim community that require tailored solutions. Matters such as marriage counselling, divorce, inheritance, and family disputes are deeply rooted in Islamic principles and are best addressed through Islamic institutions.",
  },
];

export const bonds = [
  {
    id: 1,
    image: "/pictures/gallery/brotherhood.jpg",
    title: "Nurturing  Brotherhood and Sisterhood",
    description:
      "One of the conerstones of a strong community is unity. Allah instucts us to be united.Narturing  brotherhood and sisterhood through regular interations in social events and working together on community projects will fostering a sense of love,trust.",
  },
  {
    id: 2,
    image: "/pictures/gallery/islamicMarriage.jpg",
    title: "Building community through Islamic Marriage",
    description:
      "It is the sunnah to have early marriages.Creating an environment for ease of getting married especially among young people is vital. It helps build a strong, morally grounded community. It also serves as a preventative measure, protecting the youth from the moral challenges and harmful influences of modern society.",
  },
  {
    id: 3,
    image: "/pictures/gallery/culture.jpg",
    title: "Converges of Islam and Batswana Culture",
    description:
      "A fundamental value in Islam is the recognition that it does not seek to eliminate culture, but rather to refine it, preserving what aligns with Islamic ethics and setting aside what conflicts with them. This principle is particularly vital for new Muslims, who often come from non-Islamic background .",
  },
];
