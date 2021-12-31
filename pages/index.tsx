import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';

const aboutSectionItems = ['Skills', 'Experience', 'About', 'Social'];

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Mark Mulligan - Developer</title>
        <meta name="description" content="Mark Mulligan's web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <AboutSection aboutItems={aboutSectionItems} />
        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;
