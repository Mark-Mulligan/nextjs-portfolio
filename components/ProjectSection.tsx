import Image from 'next/image';
import styles from '../styles/ProjectSection.module.scss';

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectGrid}>
        <h2>Projects</h2>
        <div className={styles.leftCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/betterMusic.jpg" layout="fill" objectFit="cover" alt="Picture of beats headphones" />
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/outdoorAdventures.jpg" layout="fill" objectFit="cover" alt="Mountains and trees view" />
          </div>
          <div className={styles.projectWrapper}>
            <Image src="/images/InvoiceGenerator.jpg" layout="fill" objectFit="cover" alt="Computer with invoices" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
