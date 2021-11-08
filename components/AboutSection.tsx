import { useState } from 'react';
import styles from '../styles/AboutSection.module.scss';

interface AboutSectionProps {
  aboutItems: string[];
}

const AboutSection = ({ aboutItems }: AboutSectionProps) => {
  const [selectedSection, setSelectedSection] = useState('Skills');

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
    </section>
  );
};

export default AboutSection;
