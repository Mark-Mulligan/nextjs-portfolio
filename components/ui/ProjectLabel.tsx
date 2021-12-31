import styles from '../../styles/ProjectLabel.module.scss';

interface ProjectLabelProps {
  title: string;
  subTitle: string;
  handleProjectClick: () => void;
}

const ProjectLabel = ({ title, subTitle, handleProjectClick }: ProjectLabelProps) => {
  return (
    <div className={styles.projectInfoContainer}>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <button onClick={handleProjectClick}>More Info</button>
      </div>
    </div>
  );
};

export default ProjectLabel;
