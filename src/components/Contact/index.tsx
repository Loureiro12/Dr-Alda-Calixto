/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>
          Para mais informações ou agendar uma consulta, entre em contato
          conosco:
        </h1>

        <p>Digite seu nome:</p>
        <input type="text" />

        <p>Digite seu telefone:</p>
        <input type="text" />

        <p>Digite seu e-mail:</p>
        <input type="text" />

        <button>Enviar</button>

        <h2>Se preferir, converse conosco através de nossas redes sociais</h2>

        <div className={styles.networks}>
          <button>
            <img src="/images/instagramNude.png" alt="" />
          </button>
          <button>
            <img src="/images/whatsappNude.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
