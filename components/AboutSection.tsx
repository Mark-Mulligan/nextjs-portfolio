import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/AboutSection.module.scss';

interface AboutSectionProps {
  aboutItems: string[];
}

const AboutSection = ({ aboutItems }: AboutSectionProps) => {
  const [selectedSection, setSelectedSection] = useState('Skills');
  const [carouselPosition, setCarouselPosition] = useState('0%');

  const handleSectionClick = (selectedItem: string) => {
    setSelectedSection(selectedItem);
  };

  return (
    <section className={styles.aboutSection}>
      <h2>Web Developer</h2>
      <ul className={styles.aboutNavigator}>
        {aboutItems.map((item) => {
          if (item === selectedSection) {
            return (
              <li key={item} className={styles.selected}>
                <span>{item}</span>
              </li>
            );
          } else {
            return (
              <li key={item} onClick={() => handleSectionClick(item)}>
                <span>{item}</span>
              </li>
            );
          }
        })}
      </ul>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
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
          <section className={styles.experienceSection}>
            <div className={styles.leftCol}>
              <h4>Full Stack Devloper</h4>
            </div>
            <div className={styles.rightCol}>
              <h6>Visual Storage Intelligence</h6>
              <p>June 2021 - Present</p>
              <ul>
                <li>
                  Python / React / Node.js / MSSQL developement engineer for an application that provides in-depth
                  enterprise storage analytics
                </li>
                <li>Developed two factor authentication system for the application</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
