import styles from '../../styles/ProjectInfoModal.module.scss';

interface ProjectInfoModalProps {
  showModal: boolean;
}

const ProjectInfoModal = ({ showModal }: ProjectInfoModalProps) => {
  return (
    <div className={`${styles.modalBackground} ${!showModal && styles.hide}`}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h1>Project Info</h1>
          <span>&times;</span>
        </div>
        <div className={styles.modalBody}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate labore enim sit nisi provident,
            rerum ipsum nostrum quam vero eum saepe quasi odit excepturi totam quisquam eos est expedita?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
