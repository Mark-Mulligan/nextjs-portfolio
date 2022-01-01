import Image from 'next/image';
import styles from '../styles/Social.module.scss';

const Social = () => {
  return (
    <section className={styles.socialSection}>
      <div>
        <div className={styles.socialWrapper}>
          <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
            <Image layout="fill" objectFit="contain" src="/icons/linkedin.svg" alt="linkedin link" />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.socialWrapper}>
          <a href="https://github.com/Mark-Mulligan" target="_blank" rel="noreferrer">
            <Image layout="fill" objectFit="contain" src="/icons/githubWhite.svg" alt="github link" />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.socialWrapper}>
          <a>
            <Image layout="fill" objectFit="contain" src="/icons/facebook.svg" alt="facebook link" />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.socialWrapper}>
          <a>
            <Image layout="fill" objectFit="contain" src="/icons/instagram.svg" alt="instagram link" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
