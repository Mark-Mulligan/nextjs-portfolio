import styles from '../../styles/ProjectInfoModal.module.scss';

interface ProjectInfoModalProps {
  showModal: boolean;
}

const ProjectInfoModal = ({ showModal }: ProjectInfoModalProps) => {
  return (
    <div className={`${styles.modalBackground} ${!showModal && styles.hide}`}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Project Info</h4>
          <button className={styles.close}>
            <span>&times;</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          <h6>Detailed Description</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate labore enim sit nisi provident,
            rerum ipsum nostrum quam vero eum saepe quasi odit excepturi totam quisquam eos est expedita?
          </p>
          <h6>Built With</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit error facere est nostrum minus cum.
            Doloribus ex deleniti provident iste quas quidem nemo! Non, nulla molestiae. Obcaecati, repellendus eos!
          </p>
        </div>
        <div className={styles.modalFooter}>
          <a tabIndex={0} className={`${styles.linkBtn} ${styles.mr10}`}>
            Live Link
          </a>
          <a tabIndex={0} className={styles.linkBtn}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
