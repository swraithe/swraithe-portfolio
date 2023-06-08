// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import vue from "./assets/techstack/vue.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/portpolio-marketplace.png";
import projectImage2 from "./assets/projects/portpolio-travel.png";
import projectImage3 from "./assets/projects/portpolio-phone.png";
import projectImage4 from "./assets/projects/portpolio-bot.png";
import projectImage5 from "./assets/projects/portpolio-cafe.png";
import projectImage6 from "./assets/projects/portpolio-dashboard.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Paul Swann",
  tagline: "I will make you happy with my suitable skills",
  img: profile,
  about: `Lovely UK based Developer with React, Vue, Node, Laravel, Flutter, React Native and Blockchain`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/swraithe",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Developer",
    Company: `Upwork`,
    Location: "online",
    Type: "Part Time",
    Duration: "May 2023 - Current",
  },
  {
    Position: "Full Stack Developer",
    Company: `Wurkhouse`,
    Location: "UK",
    Type: "Part Time",
    Duration: "May 2022 - Mar 2023",
  },
  {
    Position: "Frontend Developer",
    Company: `CheTu`,
    Location: "UK",
    Type: "Part Time",
    Duration: "Sep 2021 - Apr 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Ulster University Magee Campus",
    Company: "University in Derry",
    Location: "Northern Ireland",
    Type: "Bachelor of Computer Science",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  vue: vue,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "EasyMarket",
    image: projectImage1,
    description: `Our React Laravel Firebase Marketplace is a platform that brings together buyers and sellers of various products.
  `,
    techstack: "React | Laravle | Firebase | 2FA | JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Travel Assist",
    image: projectImage2,
    description: `ravel Assist is the ultimate travel companion app designed to make your travels more enjoyable and stress-free.`,
    techstack: "Mobile | FlutterFlow | Firebase | REST API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "PhoneMarket",
    image: projectImage3,
    description: `PhoneMarket is an online marketplace where you can buy and sell new and used phones. Our platform offers a secure and easy-to-use interface, with built-in two-factor authentication to ensure the safety of all transactions. `,
    techstack: "Flutter | Laravel | Firebase | REST API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "SmartBot",
    image: projectImage4,
    description: `Look no further! I will create a custom Python bot tailored to your specific needs. `,
    techstack: "Python | Bot | Discord | SMS ",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "CafeHub",
    image: projectImage5,
    description: `CafeHub is a modern and user-friendly cafe booking site built using Vue, Node, AWS, and lazy loading techniques. `,
    techstack: "Vue | Node | AWS | REST API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "CryptoX",
    image: projectImage6,
    description: `CryptoX is a cutting-edge cryptocurrency exchange platform built on React and Laravel.`,
    techstack: "Blockchain | Web3 | React | Laravel | SWAP",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "swraithe69@gmail.com",
  phone: "+44 07706 528067",
};
