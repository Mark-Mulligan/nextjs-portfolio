import Image from 'next/image';
import styles from '../styles/Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.leftCol}>
        <Image height={125} width={125} src="/icons/html-icon.png" alt="htmlIcon" />
      </div>
      <div className={`${styles.rightCol} ${styles.frontendCol}`}>
        <h4>Front End</h4>
        <ul>
          <li>
            <span className={styles.skillLabel}>React.js</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Redux</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Next.js</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Typescript</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Sass</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Bootstrap</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Material UI</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>CSS Modules</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Styled Components</span>
            <span className={styles.divider} />
          </li>
        </ul>
      </div>
      <div className={styles.leftCol}>
        <Image src="/icons/node-icon.svg" alt="node.js logo" height={125} width={125} />
      </div>

      <div className={styles.rightCol}>
        <h4>Backend</h4>
        <ul>
          <li>
            <span className={styles.skillLabel}>Node.js</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Python</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Socket.io</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>MSSQL</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>MongoDB</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>Azure</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>REST APIS</span>
            <span className={styles.divider} />
          </li>
          <li>
            <span className={styles.skillLabel}>GraphQL</span>
            <span className={styles.divider} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
