import styles from '../styles/ContactSection.module.scss';
import Image from 'next/image';
import { Link } from 'react-scroll';

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
              <Link to="projects" spy={true} smooth={true} duration={600}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => handleAboutSectionToggle('Skills', '0')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => handleAboutSectionToggle('About', '-200%')}
              >
                About
              </Link>
            </li>
          </div>
          <div className={styles.socialLinks}>
            <li className={styles.mr}>
              <a href="https://github.com/Mark-Mulligan" target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li className={styles.mr}>
              <a href="https://www.linkedin.com/in/mark-mulligan-50/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className={styles.mr}>
              <a href="https://www.facebook.com/mark.mulligan.5264" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mark_mulligan1" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
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
