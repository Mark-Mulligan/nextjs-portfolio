import styles from '../../styles/ProjectPanel.module.scss';
import Image from 'next/image';

interface ProjectPanelProps {
  imageSrc: string;
  imageAlt: string;
}

const ProjectPanel = ({ imageSrc, imageAlt }: ProjectPanelProps) => {
  return (
    <div className={styles.projectPanel}>
      <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
      <div className={`${styles.descriptionBackground} ${styles.topRightPanel}`}></div>
    </div>
  );
};

export default ProjectPanel;
