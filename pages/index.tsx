import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';

const aboutSectionItems = ['Skills', 'Experience', 'About', 'Social'];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Mulligan - Developer</title>
        <meta name="description" content="Mark Mulligan's web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <nav className={styles.navbar}>
            <ul className={styles.pageLinks}>
              <li>
                <Image height={50} width={50} src="/icons/website-logo.png" alt="M Logo" />
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
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

        <div className={styles.aboutBackground}>
          <AboutSection aboutItems={aboutSectionItems} />
        </div>

        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;
