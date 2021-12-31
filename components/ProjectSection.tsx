import Image from 'next/image';
import styles from '../styles/ProjectSection.module.scss';
import ProjectInfoModal from './ui/ProjectInfoModal';
import ProjectPanel from './ui/ProjectPanel';
import { useState } from 'react';

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
        <ProjectPanel
          imageSrc="/images/betterMusic.jpg"
          imageAlt="Dr. Beat headphones with dark background."
          projectTitle="Better Music"
          description="Front End - UI"
          panelType="topRightPanel"
        />
        <ProjectPanel
          imageSrc="/images/outdoorAdventures.jpg"
          imageAlt="Forest on a mountain"
          projectTitle="Outdoor Adventures"
          description="Full Stack"
          panelType="bottomRightPanel"
        />
        <ProjectPanel
          imageSrc="/images/invoiceGenerator.jpg"
          imageAlt="Computer with an invoice on the screen"
          projectTitle="Invoice Generator"
          description="Full Stack"
          panelType="topRightPanel"
        />
      </div>
    </section>
  );
};

export default ProjectSection;
