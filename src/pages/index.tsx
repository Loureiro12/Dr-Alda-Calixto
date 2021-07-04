import Head from "next/head";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dr.Alda Calixto</title>
      </Head>
      <main className={styles.contentContainer}>
        <div className={styles.about}>
          <div>
            <img src="/images/icon.png" alt="Dr.Alda Calixto" />
            <h1>Sobre a clínica</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{" "}
          </p>
        </div>
      </main>
    </>
  );
}
