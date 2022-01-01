import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const aboutSectionItems = ['Skills', 'Experience', 'About', 'Social'];

const Home: NextPage = () => {
  const [visableAboutSection, setVisableAboutSection] = useState('Skills'); // determines which section is highlighted in the about section toggle
  const [carouselPosition, setCarouselPosition] = useState('0%'); // determines which sub-section is displayed on the about section

  const handleAboutSectionToggle = (selectedItem: string, position: string) => {
    setVisableAboutSection(selectedItem);
    setCarouselPosition(position);
  };

  return (
    <div className="container">
      <Head>
        <title>Mark Mulligan - Developer</title>
        <meta name="description" content="Mark Mulligan's web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection handleAboutSectionToggle={handleAboutSectionToggle} />
        <AboutSection
          aboutItems={aboutSectionItems}
          visableAboutSection={visableAboutSection}
          carouselPosition={carouselPosition}
          handleAboutSectionToggle={handleAboutSectionToggle}
        />
        <ProjectSection />
      </main>

      <footer>
        <ContactSection />
      </footer>
    </div>
  );
};

export default Home;
