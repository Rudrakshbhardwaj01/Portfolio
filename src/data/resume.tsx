import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Rudraksh Bhardwaj",
  initials: "RB",
  url: "https://rudraksh.vercel.app",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/Jaipur",

  description:
    "Applied AI Engineer building end-to-end intelligent products",

  summary:
    "I build intelligent systems designed for real-world use. As a Machine Learning Intern, I improved model accuracy and reduced false positives through better data pipelines and tuning. I’ve developed production-ready LLM chatbots and retrieval-based AI systems, combining machine learning with full-stack development to deliver practical, scalable solutions.",

  avatarUrl:
    "https://tse1.mm.bing.net/th/id/OIP.R5SUytMxlMUTABo-7wxgiQHaG_?rs=1&pid=ImgDetMain&o=7&rm=3",

  skills: [
    { name: "C++", icon: null },
    { name: "C", icon: null },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: null },
    { name: "MySQL", icon: null },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: null },
    { name: "scikit-learn", icon: null },
    { name: "TensorFlow", icon: null },
    { name: "Keras", icon: null },
    { name: "OpenCV", icon: null },
    { name: "YOLO", icon: null },
    { name: "LangChain", icon: null },
    { name: "LangGraph", icon: null },
    { name: "Hugging Face", icon: null },
    { name: "Git", icon: null },
    { name: "Streamlit", icon: null },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@rudrakshbhardwaj01",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],

  contact: {
    email: "rudrakshbhardwaj01@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rudrakshbhardwaj01",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rudraksh-bhardwaj-55a337278",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rudrakshb01",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@rudrakshbhardwaj01",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VertexPlus Technologies",
      href: "",
      badges: ["Machine Learning Internship"],
      location: "Remote",
      title: "Machine Learning Intern",
      logoUrl:
        "https://assets.goodfirms.co/services/medium/4089_59c8d1a2a8146.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Training YOLO-based fire detection models using advanced computer vision pipelines. Improved detection reliability by 18% and reduced false positives by 15% through model tuning.",
    },
    {
      company: "Dotsquares",
      href: "",
      badges: ["AI Internship"],
      location: "Jaipur",
      title: "Winter Intern",
      logoUrl:
        "https://www.pikpng.com/pngl/b/129-1298094_dotsquares-logo-png-clipart.png",
      start: "Dec 2025",
      end: "Jan 2026",
      description:
        "Built production-ready LLM chatbots with multi-turn memory. Designed LangGraph agent workflows and developed LangChain RAG pipelines for contextual retrieval.",
    },
  ],

  education: [
    {
      school: "Manipal University Jaipur",
      href: "",
      degree: "B.Tech, Computer and Communication Engineering",
      logoUrl:
        "https://tse3.mm.bing.net/th/id/OIP._OfoMc2bGwhKjni3YE-zVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      start: "2023",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "YouTubeGPT — Video-Specific AI Chatbot",
      href: "https://github.com/Rudrakshbhardwaj01/YouTubeGPT",
      dates: "2025",
      active: true,
      description:
        "Full-stack GenAI RAG system enabling video-grounded Q&A with improved semantic retrieval.",
      technologies: ["React", "Node.js", "LangChain", "RAG"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rudrakshbhardwaj01/YouTubeGPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.pinimg.com/736x/48/05/16/480516ff203c60e14b867ac4e15e2f9b.jpg",
    },
    {
      title: "BallotBox — Online Voting Platform",
      href: "https://github.com/Rudrakshbhardwaj01/BallotBox",
      dates: "2025",
      active: true,
      description:
        "Secure full-stack voting system with REST APIs and optimized frontend performance.",
      technologies: ["Node.js", "Express", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rudrakshbhardwaj01/BallotBox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://tse4.mm.bing.net/th/id/OIP.3ae8fFDKO9ZsC5uKDDzKDQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Research Paper Summarizer",
      href: "https://github.com/Rudrakshbhardwaj01/research-paper-summarizer",
      dates: "2025",
      active: true,
      description:
        "AI-powered research summarization tool using Hugging Face LLMs and LangChain workflows.",
      technologies: ["Python", "Streamlit", "LangChain"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rudrakshbhardwaj01/research-paper-summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://tse1.mm.bing.net/th/id/OIP.5IQ1KebqVXvdJi75TTCwMAHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "PyxelForge — AI Image to ASCII Engine",
      href: "https://github.com/Rudrakshbhardwaj01/PyxelForge",
      dates: "2025",
      active: true,
      description:
        "AI pipeline generating images from text prompts and converting them into terminal-optimized ASCII art.",
      technologies: ["Python", "Mistral API", "Pillow"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Rudrakshbhardwaj01/PyxelForge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.etsystatic.com/31698537/r/il/dafc70/3719881989/il_794xN.3719881989_7eg4.jpg",
    },
  ],

  hackathons: [],
} as const;
