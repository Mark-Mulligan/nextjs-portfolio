import styles from '../styles/HeroSection.module.scss';
import Image from 'next/image';

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
                  <Image height={50} width={50} src="/icons/githubWhite.svg" alt="github link" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
                  <Image height={45} width={45} src="/icons/linkedin.svg" alt="Linkedin Link" />
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
        <div className={styles.shape}></div>
        <h1 className={styles.firstName}>Mark</h1>
        <h1 className={styles.lastName}>Mulligan</h1>
      </div>
    </section>
  );
};

export default HeroSection;
