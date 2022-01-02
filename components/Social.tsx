import Image from 'next/image';
import styles from '../styles/Social.module.scss';

const Social = () => {
  return (
    <section className={styles.socialSection}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mark-Mulligan" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/mark.mulligan.5264" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mark_mulligan1" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Social;
