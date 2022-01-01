import Image from 'next/image';
import styles from '../styles/Skills.module.scss';

const FrontEndSkills = [
  'Javascript',
  'React.js',
  'Typescript',
  'Redux',
  'Next.js',
  'Sass',
  'Css',
  'Bootstrap',
  'Material UI',
  'Styled Components',
];

const BackEndSkills = ['Node.js', 'Phython', 'Socket.io', 'MSSQL', 'MongoDB', 'Azure', 'REST APIS', 'GraphQL'];

const Skills = () => {
  const renderSkills = (skillsArr: string[]) => {
    return (
      <ul>
        {skillsArr.map((skill) => {
          return (
            <li key={skill}>
              <span className={styles.skillLabel}>{skill}</span>
              <span className={styles.divider} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section className={styles.skillsSection}>
      <div className={styles.row}>
        <div className={styles.leftCol}>
          <div className={styles.skillLogo}>
            <Image layout="fill" objectFit="contain" src="/icons/html-icon.png" alt="htmlIcon" />
          </div>
        </div>
        <div className={`${styles.rightCol} ${styles.frontendCol}`}>
          <h4>Front End</h4>
          {renderSkills(FrontEndSkills)}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.leftCol}>
          <div className={styles.skillLogo}>
            <Image src="/icons/node-icon.svg" alt="node.js logo" layout="fill" objectFit="contain" />
          </div>
        </div>

        <div className={styles.rightCol}>
          <h4>Backend</h4>
          {renderSkills(BackEndSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
