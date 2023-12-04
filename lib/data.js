import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import sotaProjectImg from "./../public/sota-project.png";
import wongnungProjectImg from "./../public/wongnung-project.png";
import pacmanProjectImg from "./../public/pacman-project.png";

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
];

export const experiencesData = [
  {
    title: "Computer Programming I Teaching Assistant",
    location: "Kasetsart University, Thailand",
    description: "Graded assignments, provided feedback. Covered object-oriented programming, data handling, version control, and diagramming.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Databases Teaching Assistant",
    location: "Kasetsart University, Thailand",
    description: "Handled assignment grading and feedback. Course topics: data modeling, SQL, NoSQL, data warehousing.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
  },
  {
    title: "Software Engineer Summer Intern",
    location: "Corporate Risk Office, Charoen Pokphand Group",
    description: "Worked on demand forecasting with ML models. Developed a React app with TypeScript for risk tracking, integrated a chatbot.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - July 2023",
  },
];

export const projectsData = [
  {
    title: "SoTA",
    description:
      "SoTA is a project that simulates how the tech behind IOC work in barebones. The service offers a data-centric API with details on sports, and medals, sets a standard for partner service integration.",
    tags: ["React", "MongoDB", "Tailwind", "FastAPI", "Docker"],
    imageUrl: sotaProjectImg,
    sourceURL: "https://github.com/SPaM-Skill-Issue/sota"
  },
  {
    title: "WongNung",
    description:
      "WongNung is a community-driven review aggregation web application for films. My primary roles was Backend development.",
    tags: ["Django", "PostgreSQL", "Tailwind", "Docker", "Nginx"],
    imageUrl: wongnungProjectImg,
    sourceURL: "https://github.com/WongNung/WongNung"
  },
  {
    title: "Pacman",
    description:
      "Pac-Man, the classic arcade game, incorporates design patterns like Strategy, State, and Flyweight, alongside a breadth-first search-based ghost algorithm.",
    tags: ["Java", "Java Swing", "Design Patterns"],
    imageUrl: pacmanProjectImg,
    sourceURL: "https://github.com/Halcyon905/pacman_ssd"
  }
];

export const skillsData = [
  { skillText: "Python", skillUrl: "/skill-images/python.svg" },
  { skillText: "Javascript", skillUrl:  "/skill-images/javascript.svg" },
  { skillText: "Typescript", skillUrl:  "/skill-images/typescript-icon.svg" },
  { skillText: "C", skillUrl:  "/skill-images/c.svg" },
  { skillText: "React", skillUrl: "/skill-images/react.svg" },
  { skillText: "FastAPI", skillUrl:  "/skill-images/fastapi-icon.svg" },
  { skillText: "Django", skillUrl: "/skill-images/django-icon.svg" },
  { skillText: "Jest", skillUrl:  "/skill-images/jest.svg"},
  { skillText: "Docker", skillUrl:  "/skill-images/docker-icon.svg" },
  { skillText: "MongoDB", skillUrl: "/skill-images/mongodb.svg" },
  { skillText: "MySQL", skillUrl: "/skill-images/mysql.svg" }
];
