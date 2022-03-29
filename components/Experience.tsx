import styles from '../styles/Experience.module.scss';

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <h4>Full Stack Developer</h4>
        </div>
        <div className={styles.rightCol}>
          <h6>Visual Storage Intelligence</h6>
          <p>June 2021 - February 2022</p>
          <ul>
            <li>
              Python / React / Node.js / MSSQL developement engineer for an application that provides in-depth
              enterprise storage analytics
            </li>
            <li>Developed two factor authentication system for the application</li>
          </ul>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.leftCol}>
          <h4>Full Stack Developer</h4>
        </div>
        <div className={styles.rightCol}>
          <h6>Evolon</h6>
          <p>February 2022 - Present</p>
          <ul>
            <li>Worked with different school districts to update and maintain their websites</li>
            <li>Built custom applications for clients to assist with business operations</li>
            <li>Provided design input for UI/UX layouts and marketing concepts</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
