import styles from '../styles/ContactSection.module.scss';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <ul>
        <div className={styles.pageLinks}>
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
        </div>
        <div className={styles.socialLinks}>
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
          <li>
            <a>
              <Image height={45} width={45} src="/icons/facebook.svg" alt="facebook link" />
            </a>
          </li>
          <li>
            <a>
              <Image height={45} width={45} src="/icons/instagram.svg" alt="instagram link" />
            </a>
          </li>
        </div>
      </ul>
      <div className={styles.email}>
        <p>Interest in reaching out to me? Send me an email:</p>
        <a>mark.mulligan.jr1@gmail.com</a>
      </div>
    </section>
  );
};

export default ContactSection;
