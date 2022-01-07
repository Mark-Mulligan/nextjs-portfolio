import styles from '../../styles/ProjectPanel.module.scss';
import Image from 'next/image';

interface ProjectPanelProps {
  projectTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  panelType: string;
  aosData: string;
  handleProjectClick: () => void;
}

const ProjectPanel = ({
  projectTitle,
  description,
  imageSrc,
  imageAlt,
  panelType,
  aosData,
  handleProjectClick,
}: ProjectPanelProps) => {
  return (
    <div className={styles.projectPanel} data-aos={aosData}>
      <Image
        blurDataURL={imageSrc}
        placeholder="blur"
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        lazyBoundary="800px"
      />
      <div className={`${styles.descriptionBackground} ${styles[panelType]}`}>
        <div className={styles.projectInfoWrapper}>
          <div className={styles.projectInfo}>
            <h3>{projectTitle}</h3>
            <p>{description}</p>
            <button onClick={handleProjectClick}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
