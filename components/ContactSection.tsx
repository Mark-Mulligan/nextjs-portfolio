import styles from '../styles/ContactSection.module.scss';
import Image from 'next/image';

interface ContactSectionProps {
  handleAboutSectionToggle: (selectedItem: string, position: string) => void;
}

const ContactSection = ({ handleAboutSectionToggle }: ContactSectionProps) => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.wrapper}>
        <ul>
          <div className={styles.pageLinks}>
            <li className={styles.hide}>
              <Image height={50} width={50} src="/icons/website-logo.png" alt="M Logo" />
            </li>
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
          </div>
          <div className={styles.socialLinks}>
            <li className={styles.mr}>
              <a href="https://github.com/Mark-Mulligan" target="_blank" rel="noreferrer">
                <Image height={50} width={50} src="/icons/githubWhite.svg" alt="github link" />
              </a>
            </li>
            <li className={styles.mr}>
              <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
                <Image height={45} width={45} src="/icons/linkedin.svg" alt="Linkedin Link" />
              </a>
            </li>
            <li className={styles.mr}>
              <a href="https://www.facebook.com/mark.mulligan.5264" target="_blank" rel="noreferrer">
                <Image height={45} width={45} src="/icons/facebook.svg" alt="facebook link" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mark_mulligan1" target="_blank" rel="noreferrer">
                <Image height={45} width={45} src="/icons/instagram.svg" alt="instagram link" />
              </a>
            </li>
          </div>
        </ul>
        <div className={styles.email}>
          <p>Interest in reaching out to me? Send me an email:</p>
          <a>mark.mulligan.jr1@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
