/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <p>
          Para mais informações ou agendar uma consulta, entre em contato
          conosco:
        </p>

        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </>
  );
}
