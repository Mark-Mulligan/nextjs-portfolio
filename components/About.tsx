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
          Visual Storage Intelligence where I support all levels of the VSI application. Our application, built using
          Python / React / Node.js / MSSQL, provides in-depth enterprise storage analytics and reporting. Because of
          this, I have a lot of experience working with advanced data visuallization and dynamic websites with ever
          changing data.
        </p>
        <p>When I am not coding, I enjoy cooking, snowboarding, and playing the drums. </p>
      </div>
    </section>
  );
};

export default About;
