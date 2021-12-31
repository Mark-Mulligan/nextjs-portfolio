import Image from 'next/image';
import styles from '../styles/ProjectSection.module.scss';
import ProjectLabel from './ui/ProjectLabel';
import ProjectInfoModal from './ui/ProjectInfoModal';
import { useState } from 'react';

const ProjectSection = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleProjectClick = () => {
    console.log('button clicked');
    setShowProjectModal(true);
  };

  return (
    <section className={styles.projectSection}>
      <div className={styles.projectGrid}>
        <h2>Projects</h2>
        <ProjectInfoModal showModal={showProjectModal} />
        <div className={styles.leftCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/betterMusic.jpg" layout="fill" objectFit="cover" alt="Picture of beats headphones" />
            <ProjectLabel title="Better Music" subTitle="Front End - UI" handleProjectClick={handleProjectClick} />
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/outdoorAdventures.jpg" layout="fill" objectFit="cover" alt="Mountains and trees view" />
            <ProjectLabel title="Outdoor Adventures" subTitle="Full Stack" handleProjectClick={handleProjectClick} />
          </div>
          <div className={styles.projectWrapper}>
            <Image src="/images/InvoiceGenerator.jpg" layout="fill" objectFit="cover" alt="Computer with invoices" />
            <ProjectLabel title="Invoice generator" subTitle="Full Stack" handleProjectClick={handleProjectClick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
