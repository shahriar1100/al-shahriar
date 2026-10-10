// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// WordPress Tech Logos
import wordpressLogo from './assets/tech_logo/wordpress.svg';
import elementorLogo from './assets/tech_logo/elementor.svg';
import pluginLogo from './assets/tech_logo/plugin.svg';
import woocommerceLogo from './assets/tech_logo/woocommerce.svg';

// Custom Work Banners
import yougoBookingLogo from './assets/work_logo/yougo_booking.svg';
import studentCertLogo from './assets/work_logo/student_cert.svg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'WordPress & CMS',
    skills: [
      { name: 'WordPress', logo: wordpressLogo },
      { name: 'Plugin Dev', logo: pluginLogo },
      { name: 'Elementor', logo: elementorLogo },
      { name: 'WooCommerce', logo: woocommerceLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "YouGo Booking Plugin",
      description:
        "A custom-built WordPress booking and appointment management plugin. Developed with an extensible scheduling architecture, custom post types, and seamless frontend integration to handle reservations, availability checks, and client bookings efficiently.",
      image: yougoBookingLogo,
      tags: ["WordPress", "Plugin Development", "Elementor", "PHP", "JavaScript"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
    {
      id: 1,
      title: "Student Certificate Showcase Plugin",
      description:
        "A specialized WordPress plugin designed to dynamically display, verify, and search student credentials and certificates by ID. Features a responsive certificate preview modal, verification security, and Elementor widget/shortcode support.",
      image: studentCertLogo,
      tags: ["WordPress", "Plugin Development", "Elementor", "PHP", "Verification"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
    {
      id: 2,
      title: "Nexus Creative Agency UI",
      description:
        "A modern digital agency and portfolio web experience featuring custom dark glassmorphism, dynamic service showcases, interactive client testimonials, and fluid GSAP micro-animations with pixel-perfect responsive layouts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["UI/UX Design", "React.js", "Tailwind CSS", "Figma", "Frontend"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
    {
      id: 3,
      title: "VogueStore E-Commerce",
      description:
        "A high-converting fashion store developed with WordPress and WooCommerce. Includes Elementor Pro single-product templates, AJAX sliding cart drawer, custom attribute filters, and optimized mobile-first checkout.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      tags: ["WordPress", "WooCommerce", "Elementor Pro", "UI/UX", "Responsive"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
    {
      id: 4,
      title: "ApexConsult Corporate Portal",
      description:
        "Corporate consulting and business advisory website designed with custom post types for case studies, appointment inquiry forms, responsive financial calculators, and speed-optimized SEO performance.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tags: ["WordPress", "Elementor", "Custom Post Types", "PHP", "UI/UX"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
    {
      id: 5,
      title: "InsightFlow SaaS Analytics Dashboard",
      description:
        "A futuristic data analytics dashboard UI designed with dark-mode aesthetic, customizable analytics chart widgets, collapsible responsive sidebar navigation, and real-time user activity metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["UI/UX Design", "React.js", "Tailwind CSS", "Dashboard", "Frontend"],
      github: "https://github.com/shahriar1100",
      webapp: "https://github.com/shahriar1100",
    },
  ];  