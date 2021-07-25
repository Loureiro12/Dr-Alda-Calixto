/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.contanteFooter}>
          <div className={styles.links}>
            <h3 style={{ marginBottom: 10 }}>Alda Calixto</h3>
            <a href="">Sobre a clínica</a>
            <br />
            <a href="">Nossa equipe</a>
            <br />
            <a href="">Nossos planos</a>
          </div>

          <div className={styles.button}>
            <img src="/images/callWhats.png" alt="Dr.Alda Calixto" />
            Entre em contato conosco!
          </div>

          <div>
            <div className={styles.itensFooter}>
              <img src="/images/instagram.png" alt="Dr.Alda Calixto" />
              <p>Dra.AldaCalixto</p>
            </div>

            <div
              className={styles.itensFooter}
              style={{ marginBottom: 20, marginTop: 20 }}
            >
              <img src="/images/call.png" alt="Dr.Alda Calixto" />
              <p>34740-2907</p>
            </div>

            <div className={styles.itensFooter}>
              <img src="/images/whatsApp.png" alt="Dr.Alda Calixto" />
              <p>(31) 9 9844-5095</p>
            </div>
          </div>
        </div>
        <p className={styles.rights}>
          Alda Calixto — 2021 © Todos os direitos reservados
        </p>
      </div>
      <div className={styles.footerMin}>
        <div className={styles.itens}>
          <Link href="/">Home</Link>
          <div className={styles.separator} />
          <Link href="/Contato">Contato</Link>
          <div className={styles.separator} />
        </div>
        <p className={styles.copyright}>
          Alda Calixto — 2021 © Todos os direitos reservados
        </p>
      </div>
    </>
  );
}
