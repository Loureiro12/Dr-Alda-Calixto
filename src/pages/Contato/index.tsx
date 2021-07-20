import Head from "next/head";

import styles from "./home.module.scss";

import { Footer } from "../../components/Footer";
import { Contact } from "../../components/Contact";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Home | Dr.Alda Calixto</title>
      </Head>
      <main className={styles.container}>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
