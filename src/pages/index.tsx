import Head from "next/head";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dr.Alda Calixto</title>
      </Head>
      <main className={styles.contentContainer}>
        <div className={styles.aboutClinic}>
          <div>
            <img src="/images/icon.png" alt="Dr.Alda Calixto" />
            <h1>Sobre a clínica</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className={styles.AboutTeam}>
          <div>
            <h1>Nossa equipe</h1>
            <img src="/images/icon.png" alt="Dr.Alda Calixto" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className={styles.imageTeam}>
          <div>
            <img src="/images/ImageDoctor.png" alt="Dra. Alda Calixto" />
            <div>
              <p>Dra. Alda Calixto</p>
              <p>(especialidade)</p>
              <p>CRO: 423412343</p>
            </div>
          </div>

          <div>
            <img src="/images/ImageDoctor.png" alt="Dra. Alda Calixto" />
            <div>
              <p>Dra. Alda Calixto</p>
              <p>(especialidade)</p>
              <p>CRO: 423412343</p>
            </div>
          </div>
        </div>

        <div className={styles.plans}>
          <div className={styles.titlePlans}>
            <div>
              <img src="/images/icon.png" alt="Dr.Alda Calixto" />
              <h1>Nossos planos</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          <div className={styles.ConteinerTable}>
            <table>
              <tr>
                <td className={styles.titleFirst} style={{ padding: 10 }}>
                  {" "}
                  <img
                    className={styles.imgTitleTable}
                    src="/images/imageTable.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
                <td className={styles.category}>Plano Porcelana</td>
                <td className={styles.categoryLast}>Plano Platina</td>
              </tr>

              <tr>
                <td style={{ height: 40, background: "#F9E0B7" }}></td>
                <td style={{ background: "#FFF" }}></td>
                <td style={{ background: "#FFF", borderRadius: 90 }}></td>
              </tr>

              <tr style={{ marginBottom: 20 }}>
                <td className={styles.title}>Benefício 1</td>
                <td className={styles.contentImg}>
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeft: "solid",
                    borderColor: "#A76C75",
                  }}
                  className={styles.contentImg}
                >
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.title}>Benefício 2</td>
                <td className={styles.contentImg}>
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeft: "solid",
                    borderColor: "#A76C75",
                  }}
                  className={styles.contentImg}
                >
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.title}>Benefício 3</td>
                <td className={styles.contentImg}>
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeft: "solid",
                    borderColor: "#A76C75",
                  }}
                  className={styles.contentImg}
                >
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.title}>Benefício 4</td>
                <td style={{ background: "#FFF" }}></td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeft: "solid",
                    borderColor: "#A76C75",
                  }}
                  className={styles.contentImg}
                >
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.title}>Benefício 5</td>
                <td style={{ background: "#FFF" }}></td>
                <td
                  style={{
                    borderLeft: 1,
                    borderLeft: "solid",
                    borderColor: "#A76C75",
                  }}
                  className={styles.contentImg}
                >
                  <img
                    className={styles.imgTable}
                    src="/images/icon.png"
                    alt="Dr.Alda Calixto"
                  />
                </td>
              </tr>

              <tr>
                <td
                  className={styles.titleLast}
                  style={{ height: 40, background: "#F9E0B7" }}
                ></td>
                <td style={{ background: "#FFF" }}></td>
                <td style={{ background: "#FFF", borderRadius: 30 }}></td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
