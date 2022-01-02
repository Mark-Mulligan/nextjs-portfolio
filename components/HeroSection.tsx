import styles from '../styles/HeroSection.module.scss';
import Image from 'next/image';
import HeroBackground from './ui/HeroBackground';

interface HeroSectionProps {
  handleAboutSectionToggle: (selectedItem: string, position: string) => void;
}

const HeroSection = ({ handleAboutSectionToggle }: HeroSectionProps) => {
  return (
    <section className={styles.heroSection}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Image height={50} width={50} src="/icons/website-logo.png" alt="M Logo" />
        </div>

        <div className={styles.navbarContent}>
          <ul className={styles.navLinks}>
            <div className={styles.pageLinks}>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about" onClick={() => handleAboutSectionToggle('Skills', '0')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => handleAboutSectionToggle('About', '-200%')}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
            <div className={styles.socialLinks}>
              <li className={styles.mr}>
                <a href="https://github.com/Mark-Mulligan" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
            </div>
          </ul>

          <div className={styles.quoteContainer}>
            <p className={styles.quoteText}>
              Making the simple complicated is commonplace. Making the complicated simple, that&#39;s creativity.
            </p>
            <p className={styles.quoteAuthor}>Charles Mingus</p>
            <hr />
          </div>
        </div>
      </nav>

      <div className={styles.nameContainer}>
        <HeroBackground />
        <h1 className={styles.firstName}>Mark</h1>
        <h1 className={styles.lastName}>Mulligan</h1>
      </div>
    </section>
  );
};

export default HeroSection;
