import styles from '../../styles/ProjectInfoModal.module.scss';

export interface ProjectInfo {
  title: string;
  description: string;
  builtWith: string;
  liveLink?: string;
  videoLink?: string;
  githubLink: string;
}

interface ProjectInfoModalProps {
  showModal: boolean;
  closeProjectModal: () => void;
  projectInfo: ProjectInfo;
}

const ProjectInfoModal = ({ showModal, closeProjectModal, projectInfo }: ProjectInfoModalProps) => {
  return (
    <div className={`${styles.modalBackground} ${!showModal && styles.hide}`}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>{projectInfo.title}</h4>
          <button className={styles.close}>
            <span onClick={closeProjectModal}>&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <h6>Project Description</h6>
          <p>{projectInfo.description}</p>
          <h6>Built With</h6>
          <p>{projectInfo.builtWith}</p>
        </div>
        <div className={styles.modalFooter}>
          {projectInfo.liveLink && (
            <a
              className={`${styles.linkBtn} ${styles.mr10}`}
              href={projectInfo.liveLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              Live Link
            </a>
          )}
          {projectInfo.videoLink && (
            <a
              className={`${styles.linkBtn} ${styles.mr10}`}
              href={projectInfo.videoLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
            >
              Video Demo
            </a>
          )}
          <a className={styles.linkBtn} href={projectInfo.githubLink} target="_blank" rel="noreferrer" tabIndex={0}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
