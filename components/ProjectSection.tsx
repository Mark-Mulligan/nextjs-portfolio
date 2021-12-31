import Image from 'next/image';
import styles from '../styles/ProjectSection.module.scss';
import ProjectLabel from './ui/ProjectLabel';
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
        <h2>Projects</h2>
        <ProjectPanel imageSrc="/images/betterMusic.jpg" imageAlt="Dr. Beat headphones with dark background." />
      </div>
    </section>
  );
};

export default ProjectSection;
