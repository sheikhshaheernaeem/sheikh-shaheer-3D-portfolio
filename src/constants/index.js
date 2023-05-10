import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "Tech",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Entrepreneurship",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  /*{
    name: "Three JS",
    icon: threejs,
  },*/
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Designing",
    company_name: "Aptect",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Januray 2020 - May 2021",
    points: [
      "Web designing focuses on creating user-friendly and intuitive experiences.",
      "Responsive layouts adapt to different devices and screen sizes.",
      "Visual design elements enhance the aesthetic appeal and brand identity of websites.",
      "Accessibility considerations ensure that websites can be used by people with disabilities.",
    ],
  },
  {
    title: "BBA Student",
    company_name: "NCBA&E",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Present",
    points: [
      "BBA at NCBA&E provides a comprehensive understanding of business principles and practices.",
      "The program equips students with essential skills in areas such as management, marketing, finance, and entrepreneurship.",
      "NCBA&E's BBA emphasizes practical learning through case studies, internships, and industry exposure.",
      "Graduates of the BBA program from NCBA&E have opportunities for diverse career paths in the corporate sector, consulting, or pursuing further education.",
    ],
  },
  {
    title: "Metaverse and Web 3.0",
    company_name: "PIAIC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "The Metaverse in the context of Web 3.0 represents a virtual shared space where users can interact, create content, and engage in immersive experiences.",
      "Web 3.0 technologies, such as blockchain and decentralized networks, provide the foundation for the Metaverse, enabling secure transactions, ownership of digital assets, and decentralized governance.",
      "The combination of the Metaverse and Web 3.0 has the potential to revolutionize industries, including gaming, entertainment, social media, education, and e-commerce, by offering enhanced user experiences, decentralized economies, and new business models.",
      "PIAIC (Pakistan Institute of Artificial Intelligence and Computer Science) students can explore the exciting possibilities of the Metaverse and Web 3.0, gaining skills and knowledge in areas such as virtual reality, blockchain, smart contracts, and decentralized applications to shape the future of this emerging digital landscape.",
    ],
  },
  {
    title: "Artificial Intelligence",
    company_name: "CORVIT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Artificial Intelligence at CORVIT provides a comprehensive understanding of AI principles, algorithms, and applications.",
      "The program equips students with essential skills in areas such as machine learning, deep learning, natural language processing, and computer vision.",
      "CORVIT's AI program emphasizes hands-on learning through real-world projects and industry collaborations.",
      "Graduates of the AI program from CORVIT have opportunities for diverse career paths in areas such as data science, AI research, robotics, and AI-based software development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was convinced that achieving a website design that truly captured the essence of our product's beauty was an insurmountable challenge, yet Shaheer has defied my expectations and surpassed them with stunning results.",
    name: "Sara Lee",
    designation: "CEO",
    company: "ABC Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I have yet to encounter a web developer who demonstrates a level of genuine concern for their clients' success comparable to that of Shaheer.",
    name: "Chris Brown",
    designation: "COO",
    company: "34dee Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Following Shaheer's optimization of our website, our traffic has increased by an impressive 50%, and we cannot express our gratitude enough for their invaluable contribution.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Al-smar Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
 /* {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },*/
  {
    name: "calculatorBySS",
    description:
      "calculator By Sheikh Shaheer",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "npm packages",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sheikhshaheernaeem/CalclutorBySS",
  },
  {
    name: "Portfolio",
    description:
      "My Portfolio",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sheikh-shaheer-portfolio-1.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
