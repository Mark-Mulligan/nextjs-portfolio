import Image from 'next/image';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.leftCol}>
        <Image
          blurDataURL="/images/profile-picture-square.jpg"
          placeholder="blur"
          className={styles.profilePicture}
          src="/images/profile-picture-square.jpg"
          alt="Picture of Mark Mulligan"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.rightCol}>
        <p>
          Hi! I&#39;m Mark, a software developer based in Dallas, TX. I currently work as a full stack developer for
          Evolon technologies using Typescript / React / Node.js for developing a product that leverages AI to make
          security cameras more intelligent. I am responsible for modernizing the front end on legacy applications by
          leveraging react to make the front end more performant and easier to update. I have also lead efforts in
          making our applications browser agonistic as well as updating the ui to modern design standards. In addition
          to these efforts, I introduced new tutorial interfaces to the application that assist with installation and
          overall usage of our product.
        </p>
        <p>When I am not coding, I enjoy cooking, snowboarding, and playing the drums. </p>
      </div>
    </section>
  );
};

export default About;
