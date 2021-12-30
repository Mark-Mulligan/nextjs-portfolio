import Image from 'next/image';
import styles from '../styles/ProjectSection.module.scss';
import ProjectLabel from './ui/ProjectLabel';

const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectGrid}>
        <h2>Projects</h2>
        <div className={styles.leftCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/betterMusic.jpg" layout="fill" objectFit="cover" alt="Picture of beats headphones" />
            <ProjectLabel title="Better Music" subTitle="Front End - UI" btnText="Launch Project" projectLink="#" />
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/outdoorAdventures.jpg" layout="fill" objectFit="cover" alt="Mountains and trees view" />
            <ProjectLabel
              title="Outdoor Adventures"
              subTitle="Full Stack - React, Redux, Node.js, MySQL"
              btnText="Launch Project"
              projectLink="#"
            />
          </div>
          <div className={styles.projectWrapper}>
            <Image src="/images/InvoiceGenerator.jpg" layout="fill" objectFit="cover" alt="Computer with invoices" />
            <ProjectLabel
              title="Invoice generator"
              subTitle="Full Stack - React, Node.js, MongoDB"
              btnText="Launch Project"
              projectLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
