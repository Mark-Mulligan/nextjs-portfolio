import styles from '../styles/ProjectSection.module.scss';
import ProjectInfoModal from './ui/ProjectInfoModal';
import ProjectPanel from './ui/ProjectPanel';
import { useState } from 'react';

const projectInfo = [
  {
    title: 'Better Music',
    description:
      'I built this project to learn Next.js while taking the opportunity to work on my UI/UX design skills.  I heard great things about Next and after using it, I am hooked.  Static generation was perferct for this site along with dynamic routing.  The image optiomization was extremly useful as well.  As a bouns, I challegned my self to build everything from scratch.  No additional libraries or packages were used in building this project.  I learned a ton from doing this and am glad I took the oppurtuniy to do so.',
    builtWith: 'Next.js, CSS modules, Style and Components custom made - no libraries used',
    liveLink: 'https://bettermusic.netlify.app',
    githubLink: 'https://github.com/Mark-Mulligan/better-music',
  },
  {
    title: 'Outdoor Adventures',
    description:
      'I am an active person and always enjoyed spending time outdoors. I designed this application to help search through and find detailed information on all the national parks in the United States. While building this project, I was able to incorporate a lot of different programming concepts that I wanted to explore. This project features server side pagination, redux state management and using library styled components to handle all css styling and complying. It is a fully stack application that is completly responsive.',
    builtWith:
      'Redux (using Redux Toolkit), Styled Components, React.js, Node.js, MySQL, Bootstrap, React Google Maps, National Parks API',
    liveLink: 'https://outdoor-adventures1.netlify.app',
    githubLink: 'https://github.com/Mark-Mulligan/outdoor-adventures-frontend-v1.0',
  },
  {
    title: 'Invoice Generator',
    description:
      'I built this application for one of my friends who is a private music teacher. He spends a lot of time putting together invoices for the parents of the students he teachers each month. This program is designed to streamline that process. I also included a way to save and organize a roster of students. This data is present to the user in the form of table to can be easily searched and sorted. I used google oauth to login in the users, mongoDB to store all the nessary data, and the react-pdf package to create and generate professional invoices that can be downloaded and used as needed.',
    builtWith: 'React.js, Node.js, MongoDB, Bootstrap, React-PDF',
    videoLink: 'https://youtu.be/ofsShzbOSEA',
    githubLink: 'https://github.com/Mark-Mulligan/invoice-gen',
  },
  {
    title: 'Oil Rig Dashboard',
    description:
      'This project was built as part of the EOG React Visualization Assessment. The goal of the project was to create a dashboard that depicts live data in the form of graphs and metric readings. This dashboard would in turn be used by either engineers or managers of an oil refinery so they can make sure all the equipment is working properly. The data is provided by a graphQL api designed by EOG and simulates hypothetical set of equipment in the field (in this case, metric reading for an oil refinery). After the data is received, it is stored and manipulated on the front end using Redux.',
    builtWith: 'React.js, GraphQL, Redux, Typescript, Recharts',
    liveLink: 'https://github.com/Mark-Mulligan/eog-react-assessment-v2.0',
    githubLink: 'https://react-data-visualization.netlify.app/',
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
          imageSrc="/images/betterMusic.jpg"
          imageAlt="Dr. Beat headphones with dark background."
          projectTitle="Better Music"
          description="Front End - UI"
          panelType="topRightPanel"
          aosData="fade-left"
          handleProjectClick={() => handleProjectClick(0)}
        />
        <ProjectPanel
          imageSrc="/images/outdoorAdventures.jpg"
          imageAlt="Forest on a mountain"
          projectTitle="Outdoor Adventures"
          description="Full Stack"
          panelType="bottomRightPanel"
          aosData="fade-right"
          handleProjectClick={() => handleProjectClick(1)}
        />
        <ProjectPanel
          imageSrc="/images/invoiceGenerator.jpg"
          imageAlt="Computer with an invoice on the screen"
          projectTitle="Invoice Generator"
          description="Full Stack"
          panelType="topRightPanel"
          aosData="fade-left"
          handleProjectClick={() => handleProjectClick(2)}
        />
        <ProjectPanel
          imageSrc="/images/eogAssessment.jpg"
          imageAlt="Picture of EOG Project"
          projectTitle="Oil Rig Dashboard"
          description="Front End"
          panelType="bottomRightPanel"
          aosData="fade-right"
          handleProjectClick={() => handleProjectClick(3)}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
