import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import weatherImage from "./assets/weather-app-demo.png";
import todoImage from "./assets/todo-app-demo.png";
import recipeImage from "./assets/recipe-finder-demo.png";

// Projects datas
export const projects = [
  {
    id: 1,
    title: "Weather App",
    techs: "React + Tailwind",
    desc: "Weather app using React & Tailwind with real time weather API.",
    demoLink: "https://weather-app0093.netlify.app/",
    img: weatherImage,
  },
  {
    id: 2,
    title: "Todo App",
    techs: "React + Tailwind",
    desc: "Todo app using React & Tailwind with some cool features.",
    demoLink: "https://todo-app0093.netlify.app/",
    img: todoImage,
  },
  {
    id: 3,
    title: "Recipe Finder App",
    techs: "React + Tailwind",
    desc: "Recipe Finder app uses a food API and fetches some recipes.",
    demoLink: "https://recipe-finder0093.netlify.app/",
    img: recipeImage,
  },
];

// Nav Links
export const navLinks = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Projects", link: "#projects" },
  { id: 4, name: "Skills", link: "#skills" },
  { id: 5, name: "Contact", link: "#contact" },
];

// Skills
export const skills = [
  {
    id: 1,
    icon: <FaHtml5 />,
    color: "text-orange-500",
    border: "border-orange-500",
    skill: "HTML 5",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    border: "border-blue-500",
    skill: "CSS 3",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    color: "text-yellow-400",
    border: "border-yellow-500",
    skill: "JS",
  },
  {
    id: 5,
    icon: <FaReact />,
    color: "text-cyan-400",
    border: "border-cyan-500",
    skill: "React",
  },
  {
    id: 6,
    icon: <FaGitAlt />,
    color: "text-orange-400",
    border: "border-orange-500",
    skill: "Git",
  },
  {
    id: 7,
    icon: <FaGithub />,
    color: "text-gray-100",
    border: "border-gray-100",
    skill: "GitHub",
  },
  {
    id: 8,
    icon: <FaFigma />,
    color: "text-gray-100",
    border: "border-gray-100",
    skill: "Figma",
  },
];
