import styles from '../../styles/ProjectLabel.module.scss';

interface ProjectLabelProps {
  title: string;
  subTitle: string;
}

const ProjectLabel = ({ title, subTitle }: ProjectLabelProps) => {
  return (
    <div className={styles.projectInfoContainer}>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default ProjectLabel;
