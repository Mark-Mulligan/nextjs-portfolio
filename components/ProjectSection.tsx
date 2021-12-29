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
            <div className={styles.projectInfoContainer}>
              <div className={styles.projectInfo}>
                <h3>Better Music</h3>
                <p>Front End - UI</p>
                <a href="#">
                  <span>Launch Project</span>
                  <span className={styles.linkArrow}>
                    <Image
                      src="/icons/white-right-arrow.png"
                      alt="link to project page in another tab"
                      height={15}
                      width={15}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.projectWrapper}>
            <Image src="/images/outdoorAdventures.jpg" layout="fill" objectFit="cover" alt="Mountains and trees view" />
            <div className={styles.projectInfoContainer}>
              <div className={styles.projectInfo}>
                <h3>Outdoor Adventures</h3>
                <p>Full Stack - React, Redux, Node.js, MySQL</p>

                <a href="#">
                  <span>Launch Project</span>
                  <span className={styles.linkArrow}>
                    <Image
                      src="/icons/white-right-arrow.png"
                      alt="link to project page in another tab"
                      height={15}
                      width={15}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectWrapper}>
            <Image src="/images/InvoiceGenerator.jpg" layout="fill" objectFit="cover" alt="Computer with invoices" />
            <div className={styles.projectInfoContainer}>
              <div className={styles.projectInfo}>
                <h3>Invoice Generator</h3>
                <p>Full Stack - React, Node.js, MongoDB</p>
                <a href="#">
                  <span>Launch Project</span>
                  <span className={styles.linkArrow}>
                    <Image
                      src="/icons/white-right-arrow.png"
                      alt="link to project page in another tab"
                      height={15}
                      width={15}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
