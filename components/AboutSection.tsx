import styles from '../styles/AboutSection.module.scss';
import Experience from './Experience';
import Skills from './Skills';
import About from './About';
import Social from './Social';

interface AboutSectionProps {
  aboutItems: string[];
  visableAboutSection: string;
  carouselPosition: string;
  handleAboutSectionToggle: (selectedItem: string, position: string) => void;
}

const AboutSection = ({
  aboutItems,
  visableAboutSection,
  carouselPosition,
  handleAboutSectionToggle,
}: AboutSectionProps) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>Web Developer</h2>
      <ul className={styles.aboutNavigator}>
        {aboutItems.map((item, index) => {
          if (item === visableAboutSection) {
            return (
              <li key={item} className={styles.selected}>
                <span>{item}</span>
              </li>
            );
          } else {
            return (
              <li key={item} onClick={() => handleAboutSectionToggle(item, `${index === 0 ? '0' : `-${index}00%`}`)}>
                <span>{item}</span>
              </li>
            );
          }
        })}
      </ul>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} style={{ left: carouselPosition }}>
          <Skills />
          <Experience />
          <About />
          <Social />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
