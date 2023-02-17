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
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta name="title" property="og:title" content="Mark Mulligan - Full Stack Developer" />
        <meta name="image" property="og:image" content="https://markmulligan.dev/images/portfolio.png" />
        <meta name="url" property="og:url" content="https://markmulligan.dev/" />
        <meta
          name="description"
          property="og:description"
          content="Hi! I'm Mark, a software developer based in Dallas, TX. I currently work as a full stack developer for
          Evolon technologies using Typescript / React / Node.js for developing a product that leverages AI to make
          security cameras more intelligent. I am responsible for modernizing the front end on legacy applications by
          leveraging react to make the front end more performant and easier to update. I have also lead efforts in
          making our applications browser agonistic as well as updating the ui to modern design standards. In addition
          to these efforts, I introduced new tutorial interfaces to the application that assist with installation and
          overall usage of our product."
        />
        <title>Mark Mulligan - Full Stack Developer</title>
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
