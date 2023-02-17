import styles from '../styles/Experience.module.scss';

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <h4>Full Stack Developer</h4>
        </div>
        <div className={styles.rightCol}>
          <h6>Evolon</h6>
          <p>February 2022 - Present</p>
          <ul>
            <li>
              Typescript / React / Node.js development for a product that leverages AI to make security cameras more
              intelligent
            </li>
            <li>Responsible for modernizing UI/UX design on legacy applications</li>
            <li>Assisted with architecture and design of a brand new enterprise software</li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <h4>Full Stack Developer</h4>
        </div>
        <div className={styles.rightCol}>
          <h6>Visual Storage Intelligence</h6>
          <p>May 2020 - February 2022</p>
          <ul>
            <li>
              Python / React / Node.js / MSSQL development engineer for an application that provides in-depth enterprise
              storage analytics
            </li>
            <li>Developed two factor authentication system for the application</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
