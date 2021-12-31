import styles from '../styles/HeroSection.module.scss';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <nav className={styles.navbar}>
        <ul className={styles.pageLinks}>
          <li>
            <Image height={50} width={50} src="/icons/website-logo.png" alt="M Logo" />
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>

        <ul className={styles.navSocialLinks}>
          <li>
            <a>
              <Image height={50} width={50} src="/icons/githubWhite.svg" alt="github link" />
            </a>
          </li>
          <li>
            <a>
              <Image height={45} width={45} src="/icons/linkedin.svg" alt="Linkedin Link" />
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.quoteContainer}>
        <p className={styles.quoteText}>
          Making the simple complicated is commonplace. Making the complicated simple, that&#39;s creativity.
        </p>
        <p className={styles.quoteAuthor}>Charles Mingus</p>
        <hr />
      </div>

      <div className={styles.nameContainer}>
        <div className={styles.shape}></div>
        <h1 className={styles.firstName}>Mark</h1>
        <h1 className={styles.lastName}>Mulligan</h1>
      </div>
    </section>
  );
};

export default HeroSection;
