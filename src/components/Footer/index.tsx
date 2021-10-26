/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className={styles.footer} id="footer">
        <div className={styles.contanteFooter}>
          <div className={styles.links}>
            <h3 style={{ marginBottom: 10 }}>Alda Calixto</h3>
            <div>
              <a href="#aboutClinic">Sobre a clínica</a>
            </div>
            <div>
              <a href="#AboutTeam">Nossa equipe</a>
            </div>
            <div>
              <a href="#plans">Nossos planos</a>
            </div>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=5531998445095&text&app_absent=0">
            <div className={styles.button}>
              <img src="/images/callWhats.png" alt="Dr.Alda Calixto" />
              Entre em contato conosco!
            </div>
          </a>

          <div>
            <div className={styles.itensFooter}>
              <img src="/images/instagram.png" alt="Dr.Alda Calixto" />
              <a href="https://instagram.com/dra.aldacalixto?utm_medium=copy_link">
                Dra.AldaCalixto
              </a>
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

      <div className={styles.footerMin} id="footerMin">
        <div className={styles.itens}>
          <div className={styles.itensFooterMin}>
            <img src="/images/instagram.png" alt="Dr.Alda Calixto" />
            <a href="https://instagram.com/dra.aldacalixto?utm_medium=copy_link">
              Dra.AldaCalixto
            </a>
          </div>

          <div
            className={styles.itensFooterMin}
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <img src="/images/call.png" alt="Dr.Alda Calixto" />
            <a>(31) 34740-2907</a>
          </div>

          <div className={styles.itensFooterMin}>
            <img src="/images/whatsApp.png" alt="Dr.Alda Calixto" />
            <a>(31) 9 9844-5095</a>
          </div>
        </div>
        <p className={styles.copyright}>
          Alda Calixto — 2021 © Todos os direitos reservados
        </p>
      </div>
    </>
  );
}
