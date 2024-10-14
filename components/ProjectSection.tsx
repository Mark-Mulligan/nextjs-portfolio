import styles from "../styles/ProjectSection.module.scss";
import ProjectInfoModal from "./ui/ProjectInfoModal";
import ProjectPanel from "./ui/ProjectPanel";
import { useState } from "react";
import { ProjectInfo } from "./ui/ProjectInfoModal";

const projectInfo: ProjectInfo[] = [
  {
    title: "Fluency Forge",
    description: "Fluency Forge is an educational platform designed to teach users the Japanese character system. It offers fully-fledged courses adapted from textbooks, turning them into immersive learning experiences. Fluency Forge includes a range of features to enhance your learning, such as performance tracking to identify areas where you need improvement, a customizable review mode to focus on the concepts you're working on, and comprehensive courses that integrate seamlessly across the platform. Additionally, it provides an extensive library to help you quickly look up any information you need for deeper understanding.",
    builtWith:
      "Next.js, Supabase, Tailwind, LemonSqueezy (Payment integration)",
    liveLink: "https://www.fluencyforge.com",
  },
  {
    title: "US Housing Data",
    description: `I built this application to allow me to track the United State's housing market. The charts quickly allow you to look at trends in the housing market based on historical data gathered from the last five years.  The data was provided by relator.com`,
    builtWith: "Next.js, Typescript, Tailwind, Recharts",
    liveLink: "https://us-housing-data.vercel.app/",
    githubLink: "https://github.com/Mark-Mulligan/us-housing-data-v2",
  },
  {
    title: "Invoice Generator",
    description:
      "I built this application for one of my friends who is a private music teacher. He spends a lot of time putting together invoices for the parents of the students he teachers each month. This program is designed to streamline that process. I also included a way to save and organize a roster of students. This data is present to the user in the form of table to can be easily searched and sorted. I used google oauth to login in the users, firebase to store all the necessary data, and the react-pdf package to create and generate professional invoices that can be downloaded and used as needed. I also used AWS to be able to send emails directly from the application",
    builtWith:
      "Next.js, MUI, Firebase, Next/auth, React-PDF, AWS SES, AWS Lambdas, AWS API Gateway, AWS SNS Topics",
    liveLink: "https://lesson-invoice-generator.netlify.app/",
    videoLink: "https://www.youtube.com/watch?v=ZnVdfw9hZRc",
    githubLink: "https://github.com/Mark-Mulligan/next-invoice-generator",
  },
 
  {
    title: "Just Code",
    description:
      "This project was created to help people learn how to code with javascript.  I found that a lot of sights like hacker rank and leet code are good for studying advanced concepts, but not so great for people learning how to code.  I created this site to help others learn how to code by creating simple straightforward problems to solve.  These problems are also inspired from problems I have had to solve in my day to day job, instead of just fancy algorithmic problems meant to trip you up.",
    builtWith: "Next.js, Typescript, Tailwind, Supabase(sql)",
    liveLink: "https://just-code.vercel.app/",
    githubLink: "https://github.com/Mark-Mulligan/just-code-v2",
  },
 
];

const ProjectSection = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectSelectedIndex, setProjectSelectedIndex] = useState(0);

  const handleProjectClick = (projectIndex: number) => {
    setProjectSelectedIndex(projectIndex);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
  };

  return (
    <section className={styles.projectSection}>
      <div>
        <h2 data-aos="fade-right" id="projects">
          Projects
        </h2>
        <ProjectInfoModal
          showModal={showProjectModal}
          closeProjectModal={closeProjectModal}
          projectInfo={projectInfo[projectSelectedIndex]}
        />

        <ProjectPanel
          imageSrc="/images/FluencyForge.png"
          imageAlt="Home page of fluencyforge.com"
          projectTitle="Fluency Forge"
          description="Full Stack"
          panelType="bottomRightPanel"
          aosData="fade-right"
          handleProjectClick={() => handleProjectClick(0)}
        />
         <ProjectPanel
          imageSrc="/images/housingData.jpg"
          imageAlt="Overview of housing data website."
          projectTitle="US Housing Data"
          description="Front End - UI"
          panelType="topRightPanel"
          aosData="fade-right"
          handleProjectClick={() => handleProjectClick(1)}
        />
        <ProjectPanel
          imageSrc="/images/invoiceGenerator.png"
          imageAlt="Invoice page of the invoice generator app"
          projectTitle="Invoice Generator"
          description="Full Stack"
          panelType="bottomRightPanel"
          aosData="fade-left"
          handleProjectClick={() => handleProjectClick(2)}
        />
        {/* <ProjectPanel
          imageSrc="/images/justCodeChallengeScreen.png"
          imageAlt="Picture of the landing page for just code"
          projectTitle="Just Code"
          description="Full Stack"
          panelType="topRightPanel"
          aosData="fade-left"
          handleProjectClick={() => handleProjectClick(3)}
        /> */}

       
      </div>
    </section>
  );
};

export default ProjectSection;
