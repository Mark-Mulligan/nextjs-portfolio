import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container">
      <Head>
        <meta name="title" property="og:title" content="Mark Mulligan - Developer" />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content="https://markmulligan.dev/images/portfolio.png" />
        <meta name="url" property="og:url" content="https://markmulligan.dev/" />
        <meta
          name="description"
          property="og:description"
          content="Mark Mulligan is a full stack developer with experience in React, Node.js, Typescript, AWS, and database technologies."
        />
        <title>Mark Mulligan - Developer</title>
        <meta name="description" content="Mark Mulligan's web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
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
        <ContactSection handleAboutSectionToggle={handleAboutSectionToggle} />
      </footer>
    </div>
  );
};

export default Home;
