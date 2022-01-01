import styles from '../../styles/ProjectPanel.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface ProjectPanelProps {
  projectTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  panelType: string;
  setShowProjectModal: Dispatch<SetStateAction<boolean>>;
}

const ProjectPanel = ({
  projectTitle,
  description,
  imageSrc,
  imageAlt,
  panelType,
  setShowProjectModal,
}: ProjectPanelProps) => {
  const handleMoreInfoClick = () => {
    setShowProjectModal(true);
  };

  return (
    <div className={styles.projectPanel}>
      <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
      <div className={`${styles.descriptionBackground} ${styles[panelType]}`}>
        <div className={styles.projectInfoWrapper}>
          <div className={styles.projectInfo}>
            <h3>{projectTitle}</h3>
            <p>{description}</p>
            <button onClick={handleMoreInfoClick}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
