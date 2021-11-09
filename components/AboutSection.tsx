import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/AboutSection.module.scss';
import Experience from './Experience';
import Skills from './Skills';
import About from './About';
import Social from './Social';

interface AboutSectionProps {
  aboutItems: string[];
}

const AboutSection = ({ aboutItems }: AboutSectionProps) => {
  const [selectedSection, setSelectedSection] = useState('Skills');
  const [carouselPosition, setCarouselPosition] = useState('0%');

  const handleSectionClick = (selectedItem: string, position: string) => {
    setSelectedSection(selectedItem);
    setCarouselPosition(position);
  };

  return (
    <section className={styles.aboutSection}>
      <h2>Web Developer</h2>
      <ul className={styles.aboutNavigator}>
        {aboutItems.map((item, index) => {
          if (item === selectedSection) {
            return (
              <li key={item} className={styles.selected}>
                <span>{item}</span>
              </li>
            );
          } else {
            return (
              <li key={item} onClick={() => handleSectionClick(item, `${index === 0 ? '0' : `-${index}00%`}`)}>
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
