/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerMenu}>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/Contato">Contato</Link>
          </nav>
        </div>
        <div className={styles.headerImage}>
          <img
            className={styles.imagemHeader}
            src="/images/header.png"
            alt="image"
          />
          <img
            className={styles.imagemGrupo}
            src="/images/logoGrupo.png"
            alt="image"
          />
        </div>
        <h1>A vida é melhor quando você sorri!</h1>
      </div>

      <div className={styles.containerMin}>
        <div className={styles.headerMin}>
          <img src="/images/logoTipo.png" alt="Dr. Alda Calixto" />
        </div>
        <p>A vida é melhor quando você sorri!</p>
      </div>
    </header>
  );
}
