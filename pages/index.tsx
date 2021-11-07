import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Mulligan - Developer</title>
        <meta name="description" content="Mark Mulligan's web developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
