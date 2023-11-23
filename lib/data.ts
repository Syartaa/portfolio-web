import React from "react";

import { LuBookMarked, LuGraduationCap } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FaFolderOpen, FaPencilRuler, FaEnvelope } from "react-icons/fa";

import pfpImg from "@/public/img/pfp.webp";


import radianca from "@/public/img/radiance.png";
import gfc from "@/public/img/gfc.png";
import jobliss from "@/public/img/jobbliss.png";



export const profilePicture = pfpImg;

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(AiFillHome, {size: 22})
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(BsFillInfoCircleFill, {size: 20})
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaFolderOpen, {size: 22})
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaPencilRuler, {size: 20})
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(BsFillBriefcaseFill, {size: 22})
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(FaEnvelope, {size: 22})
  },
] as const;

export const educationData = [
  {
    title: "IT Associate",
    institution: "Centro Tecnológico Frederico JorgeLogemann (CFJL)",
    description: "Description Description Description Description Description Description Description Description Description Description",
    icon: React.createElement(LuBookMarked),
    date: "2022 - 2023",
  },
  {
    title: "Computer Science",
    institution: "Universidade Regional do Noroeste do Estadodo Rio Grande do Sul (UNIJUÍ)",
    description: "Description Description Description Description Description Description Description Description Description Description",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2027",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce",
    description: "E-commerce for beauty store",
    tags: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    imageUrl: radianca,
    url:" https://github.com/Syartaa/Projekti-Web"
  },
  {
    title: "Food delivery project",
    description: 'A website to order food',
    tags: ["React", "Stripe", "MySQL", "Tailwind", "Laravel","vite" ],
    imageUrl: gfc,
    url: "",
  },
  {
    title: "JOBBLISS",
    description: 'A website to post or to look for jobs',
    tags: ["React",  "Tailwind", ],
    imageUrl: jobliss,
    url: "",
  },
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Problem Solving" 

] as const;