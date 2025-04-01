import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
      
      // services starts from here
      {
        id: 1,
        title: "Custom Software Development",
        path: "/services/custom-software",
        newTab: false,
      },
      {
        id: 2,
        title: "Web Application Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 3,
        title: "Mobile App Development (iOS & Android)",
        path: "/services/mobile-apps",
        newTab: false,
      },
      {
        id: 4,
        title: "Enterprise Software Solutions",
        path: "/services/enterprise-solutions",
        newTab: false,
      },
      {
        id: 5,
        title: "SaaS (Software as a Service) Development",
        path: "/services/saas-development",
        newTab: false,
      },
      {
        id: 6,
        title: "Website Design & Development",
        path: "/services/website-development",
        newTab: false,
      },
      {
        id: 7,
        title: "E-commerce Development",
        path: "/services/ecommerce",
        newTab: false,
      },
      {
        id: 8,
        title: "CMS Development (WordPress, Shopify, etc.)",
        path: "/services/cms-development",
        newTab: false,
      },
      {
        id: 9,
        title: "UI/UX Design & Prototyping",
        path: "/services/ui-ux-design",
        newTab: false,
      },
      {
        id: 10,
        title: "Cloud Computing & Migration",
        path: "/services/cloud-computing",
        newTab: false,
      },
      {
        id: 11,
        title: "DevOps Consulting & Implementation",
        path: "/services/devops",
        newTab: false,
      },
      {
        id: 12,
        title: "Serverless Architecture Solutions",
        path: "/services/serverless",
        newTab: false,
      },
      {
        id: 13,
        title: "AI-Powered Chatbots",
        path: "/services/ai-chatbots",
        newTab: false,
      },
      {
        id: 14,
        title: "Data Science & Analytics",
        path: "/services/data-science",
        newTab: false,
      },
      {
        id: 15,
        title: "Computer Vision Solutions",
        path: "/services/computer-vision",
        newTab: false,
      },
      {
        id: 16,
        title: "Natural Language Processing (NLP)",
        path: "/services/nlp",
        newTab: false,
      },
      {
        id: 17,
        title: "Blockchain & FinTech Solutions",
        path: "/services/blockchain-fintech",
        newTab: false,
      },
    ],
  },
];
export default menuData;
