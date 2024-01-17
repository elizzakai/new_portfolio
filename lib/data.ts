import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import atl0 from "@/public/atl1.png";
import retrig from "@/public/retrig.png";
import tree from "@/public/trees.png";
import gba from "@/public/GBA.png";
import duo from "@/public/duo.png";
import supp from "@/public/supply.png";
import game from "@/public/games.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "PPE4ALL | Development Member",
    location: "Remote",
    description:
      "Worked on our Core Stories page for the website [react], shedding light on the organizations/populations that we provided for.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Consult Your Community | Operations Optimization Lead",
    location: "Remote",
    description:
      "Devised idea of creating a form to register and keep track instead of making a large flowchart for Instrument Registration, reducing time spent by 80%.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2021",
  },
  {
    title: "Visa | Full Stack Developer Intern",
    location: "Remote",
    description:
      "Designed the UI in Angular to display unused rule cases on SQUIRE site, as well as Created an API endpoint to get Rule-Execution data.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2021",
  },
  {
    title: "~exchange abroad~ | ITU Copenhagen",
    location: "Copenhagen, Denmark",
    description:
      "I took classes in ethics, data analysis [R], and collaborated in a group Design Course with a device and app, and paper(s) deliverable(s) [and took Danish :)].",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "~study abroad~ | Barcelona Tech",
    location: "Barcelona, Spain",
    description:
      "I took classes in educational technology, discrete mathematics, and lead my group project for UI Design.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "American Express | Front-End Developer Intern",
    location: "Scottsdale, AZ",
    description:
      "Worked on fixes to acessibilty for account management module, as well as Back button fixes; Added analytics tagging for some modules.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Netflix | Back-End Development Bootcamper",
    location: "Remote",
    description:
      "Worked on multiple projects, including a large final group project where I worked on the model, REST, and GraphQL for Game",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Georgia Tech | Research Assistant",
    location: "Atlanta, GA",
    description:
      "Currently working on investigating and mapping the  missing trees in Atlanta, and currently created a script to find images of all the addresses in our csv datasets.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Graduating from Georgia Tech",
    location: "Atlanta, GA",
    description:
      "I'm graduating this fall with a degree in Computational Media 🤠. My stack includes React, Typescript, Java, Python, SQL, Angular, I'm open to new grad opportunities.",
      icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ghosts of a city in a forest",
    description:
    "Dataset: Created a python function with openai API to find the type of tree(s) and number of trees dead per address; Map: Designed 10,000 trees graveyard with mapbox and JavaScript",
    tags: ["Mapbox, JS, Figma, Python, OpenAI"],
    imageUrl: tree,
    link: "https://github.com/elizzakai/ghost-trees",
  },

  {
    title: "Homey Instagram",
    description:
      "Collaborated in creating a redesign of Instagram wherein the focus is strengthening and displaying current relationships.",
    tags: ["Figma"],
    imageUrl: corpcommentImg,
    link: "https://elizzakai.github.io/my_Portfolio/instagram.html",
  },
  {
    title: "Retrigger App & Device",
    description:
      "Investigated the problem space of chronic health and protoyped a product",
    tags: ["Figma", "Adobe"],
    imageUrl: retrig,
    link: "https://elizzakai.github.io/my_Portfolio/retrigger.html",
  },
  {
    title: "Design Futuring: The Community ",
    description:
      "Worked on creating products that exist in an alternate ecosystem where fresh food acess is limited & expensive.",
    tags: ["Figma"],
    imageUrl: wordanalyticsImg,
    link: "https://docs.google.com/presentation/d/14Dw2r7M9KEHGigbZQji972OYUroucZGS1bbOVxVFJ_8/edit?usp=sharing",
  },
  {
    title: "Atlanta Surveillance Mapping",
    description:
      "Worked on mapping surveillance in Atlanta using Arcgis",
    tags: ["Figma", "Arcgis"],
    imageUrl: atl0,
    link: "https://docs.google.com/presentation/d/1Yy5tih_f6MhrZ4Fa5lmHuy6ILKSV6TFg-vFVCzRj7-g/edit?usp=sharing"
  },
  {
    title: "Tipton Trouble Game",
    description:
      "Created a game for the Gameboyadvance with collision mapping and xl screens",
    tags: ["R"],
    imageUrl: gba,
    link: "https://gba.ninja/?autorun=https://elizzakai.github.io/Final/Project.gba"
  },
  {
    title: "Product Feature: Duolingo RELICS",
    description:
      "A feature for increasing learning engagement by learning about the culture ",
    tags: ["Figma"],
    imageUrl: duo,
    link: "https://elizzakai.github.io/my_Portfolio/duolingo.html"
  },
  {
    title: "Supply Arch for Woodruff Park, ATL",
    description:
      "Our [Supply-Arch] helps [park patrons] who experience [a disruption in publicly-accessible resources]",
    tags: ["CAD", "Paper-Products"],
    imageUrl: supp,
    link: "https://elizzakai.github.io/my_Portfolio/supplyarch.html"
  },
  {
    title: "GameStore",
    description:
      "Back-end API  inventory management web service for a video game store",
    tags: ["Java", "REST", "GraphQL"],
    imageUrl: game,
    link: "https://docs.google.com/presentation/d/1GWe-yl8y-do4tIIusjvt6XjtTSqXxG2FaLFnNhwroeU/edit?usp=sharing"
  }
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Java",
  "Next.js",
  "Node.js",
  "Git",
  "Python",
  "GraphQL",
  "Angular",
  "Express",
  "SQL",
  "Adobe",
  "Figma",
  "REST",
  "Jenkins",
  "React Testing",
  "Framer Motion",
] as const;