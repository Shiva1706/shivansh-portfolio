/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shivansh",
  logo_name: "&$",
  nickname: "shiva ",
  full_name: "Shivansh Singh",
  subTitle: "Front-End Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1CHQhmi7B4Rm8zl30D7fgoAjI6a3r9-Gx/view?usp=sharing",
  mail: "mailto:shivansh.singh20021@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/Shiva1706",
  linkedin: "https://www.linkedin.com/in/shiva1706/",
  gmail: "shivansh.singh20021@gmail.com",
  twitter: "https://twitter.com/Sh1va_S1ngh",
  instagram: "https://www.instagram.com/_.shivansh.singh/",
};

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology",
      subtitle: "Bachelor of Technology",
      logo_path: "vit.png",
      alt_name: "VIT",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Frontend , Web , etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://vitbhopal.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Reactjs Essential",
      subtitle: "Linkedin",
      logo_path: "react.png",
      certificate_link:
        "https://drive.google.com/file/d/171oqasNVbqKC4CgB-w0VLfULk-lKRh46/view?usp=sharing",
      alt_name: "Reactjs",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "The Complete 2022 Web Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1koQA2tZQ9eyiIwiPrrfZHFvFjIi881zV/view?usp=sharing",
      alt_name: "MERN Stack",
      color_code: "#E2405F",
    },
    {
      title: "Azure",
      subtitle: "Coursera",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mUTsEW4Z8zD_OVHMSng5zYwRf1p9EsNB/view?usp=sharing",
      alt_name: "Azure Certificate",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Web Development",
      subtitle: "Progate India",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/1WyTwmlhVoVFhDhnRlJtCG4TRvwl3FdUJ/view?usp=sharing",
      alt_name: "Progate India",
      color_code: "#2AAFED",
    },
    {
      title: "Data Visualization with R",
      subtitle: "IBM",
      logo_path: "data-visualization-with-r.png",
      certificate_link:
        "https://drive.google.com/file/d/1x63Ct1mZh_CTJi1CJET2NbqtpedCj8qZ/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#fe0037",
    },
    
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for full time job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Social Marketing",
          company: "Allround",
          company_url: "https://allroundclub.com/",
          logo_path: "allround.jpg",
          duration: "Jan. 2022 - Feb. 2022",
          location: "Online",
          description: `Assignment was to follow 20 groups per day on Facebook and endorse the course of the company.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Embedde Engineer (Intern)",
          company: "Honeywell",
          company_url: "https://www.honeywell.com/in/en",
          logo_path: "honeywell.png",
          duration: "Jan. 2023 - Present",
          location: "Bangaluru, Karnataka",
          description: `Have to program the Intel's Tiger lake processor to simulate the good communication system of aeroplane
          `,
          
          color: "#0071C5",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create ReactJs Frontend Projects, and Javascript Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prof.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Sh1va_S1ngh",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "MeetUp",
      url: "https://github.com/Shiva1706/meetup",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with next.js, Material-UI, and Chat-Engine.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Chat-Engine",
          iconifyClass: "logos-chatengine",
        },
      ],
    },
    {
      id: "1",
      name: "Ghibli Films Store",
      url: "https://github.com/Shiva1706/ghibli-films-store",
      description:
        "A film store where you gets the information of movies produced by Ghibli Studio.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Ghibli API",
          iconifyClass: "",
        },
        
      ],
    },
    {
      id: "13",
      name: "MI Store",
      url: "https://github.com/Shiva1706/mi_store",
      description:
        "Clone of Mi Store developed by react.js and Material UI.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Material UI",
          iconifyClass: "mdi-material-ui",
        },
        
      ],
    },
    {
      id: "2",
      name: "Vethr",
      url: "https://github.com/Shiva1706/vethr",
      description:
        "Weather forcasting website fetch the data from OpenWeather API and show real time weather update.",
      languages: [
        {
          name: "ReactJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Material UI",
          iconifyClass: "mdi-material-ui",
        },
      ],
    },
    {
      id: "3",
      name: "Face Recognition and Emotion Detection",
      url: "https://github.com/Shiva1706/Face_Emotion_Detector",
      description:
        "Trained a CNN classifier with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human.",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "Jupiter Notebook",
          iconifyClass: "game-icons:jupiter",
        },
      ],
    },
    {
      id: "4",
      name: "Kisan Bandhu",
      url: "#/projects",
      description:
        "Here, farmers can interact with other farmers and share their ideas and suggestions related to farming. They also have crop recommendation feature, where farmers will better crop recommondation based on their land composition.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Machine Learning ",
          iconifyClass: "eos-icons:machine-learning-outlined",
        },
      ],
    },
    {
      id: "3",
      name: "Try No One Cry",
      url: "#/projects",
      description: "With the help of this website, we tried to help neady people in order to get food and clothes. We distribute the foods and clothes donated by donors to poor people and neady one.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Google Map",
          iconifyClass: "logos:google-maps",
        },
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
