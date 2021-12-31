import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import HeroSection from '../components/HeroSection';
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
        <HeroSection />

        <div className={styles.aboutBackground}>
          <AboutSection aboutItems={aboutSectionItems} />
        </div>

        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;
