import styles from '../../styles/ProjectInfoModal.module.scss';

interface ProjectInfoModalProps {
  showModal: boolean;
}

const ProjectInfoModal = ({ showModal }: ProjectInfoModalProps) => {
  return (
    <div className={`${styles.modalBackground} ${!showModal && styles.hide}`}>
      <div className={styles.modal}></div>
    </div>
  );
};

export default ProjectInfoModal;
