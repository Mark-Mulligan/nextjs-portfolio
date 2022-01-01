import Image from 'next/image';
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
];

const ProjectSection = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleProjectClick = () => {
    console.log('button clicked');
    setShowProjectModal(true);
  };

  return (
    <section className={styles.projectSection}>
      <div>
        <h2 id="projects">Projects</h2>
        <ProjectInfoModal showModal={showProjectModal} />
        <ProjectPanel
          imageSrc="/images/betterMusic.jpg"
          imageAlt="Dr. Beat headphones with dark background."
          projectTitle="Better Music"
          description="Front End - UI"
          panelType="topRightPanel"
          setShowProjectModal={setShowProjectModal}
        />
        <ProjectPanel
          imageSrc="/images/outdoorAdventures.jpg"
          imageAlt="Forest on a mountain"
          projectTitle="Outdoor Adventures"
          description="Full Stack"
          panelType="bottomRightPanel"
          setShowProjectModal={setShowProjectModal}
        />
        <ProjectPanel
          imageSrc="/images/invoiceGenerator.jpg"
          imageAlt="Computer with an invoice on the screen"
          projectTitle="Invoice Generator"
          description="Full Stack"
          panelType="topRightPanel"
          setShowProjectModal={setShowProjectModal}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
