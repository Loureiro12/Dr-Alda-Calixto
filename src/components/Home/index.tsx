/* eslint-disable @next/next/no-img-element */
import { useState, FormEvent } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import Doctor from "../../../public/images/ImageDoctor.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/gallery/gallery2.jpg",
    thumbnail: "/images/gallery/gallery2.jpg",
  },
  {
    original: "/images/gallery/gallery3.jpg",
    thumbnail: "/images/gallery/gallery3.jpg",
  },
  {
    original: "/images/gallery/gallery4.jpg",
    thumbnail: "/images/gallery/gallery4.jpg",
  },
  {
    original: "/images/gallery/gallery5.jpg",
    thumbnail: "/images/gallery/gallery5.jpg",
  },
  {
    original: "/images/gallery/gallery6.jpg",
    thumbnail: "/images/gallery/gallery6.jpg",
  },
];

const doctor = [
  {
    id: 1,
    imagem: "/images/doctorImg/Dra.Alda.jpeg",
    title: "Dra. Alda Calixto",
    specialty: "Especialista em prótese",
  },
  {
    id: 2,
    imagem: "/images/doctorImg/Dra.Christina.jpeg",
    title: "Dra. Christina Kawakami",
    specialty: "Implantodontista",
  },
  {
    id: 3,
    imagem: "/images/doctorImg/Dra.Luana.jpeg",
    title: "Dra. Luana Godinho",
    specialty: "Clínica Geral",
  },
  {
    id: 4,
    imagem: "/images/doctorImg/Dr.Marcio.jpeg",
    title: "Dra. Márcio Ribeiro",
    specialty: "Ortodontista",
  },
  {
    id: 5,
    imagem: "/images/doctorImg/Dra.julia.jpeg",
    title: "Dra. Julia Villemberg",
    specialty: "Estagiária",
  },
  {
    id: 6,
    imagem: "/images/doctorImg/Samuel.jpeg",
    title: "Samuel Calixto",
    specialty: "Gestor Financeiro",
  },
  {
    id: 7,
    imagem: "/images/doctorImg/Ruth.jpeg",
    title: "Ruth Helena",
    specialty: "Secretária",
  },
];

export function Home() {
  return (
    <>
      <div className={styles.aboutClinic} id="aboutClinic">
        <div>
          <img
            src="/images/icon.png"
            alt="Dr.Alda Calixto"
            className={styles.imgTooth}
          />
          <h1>Sobre a clínica</h1>
        </div>
        <p>
          “O sorriso representa alegria, beleza e é capaz de transformar o
          cotidiano das pessoas, transmite acolhimento, restaura laços e cura a
          alma”. É com este pensamento que a dentista Dra. Alda Calixto cuida da
          saúde bucal de seus pacientes a cerca de 30 anos, juntamente com sua
          equipe de profissionais qualificados na área de Odontologia.
          <br />
          <br />
          A profissão: dentista, veio da admiração pelo pai apaixonado e
          dedicado às próteses dentárias, na aptidão por trabalhos manuais e por
          apreciar os detalhes. Com isso, Alda formou na Faculdade de
          Odontologia da Universidade de Itaúna (1992) e fez especialização em
          prótese e disfunção temporomandibular pela faculdade São Leopoldo
          Mandic.
          <br />
          <br />
          Hoje além de atuar em várias áreas da odontologia a Dra Alda Calixto
          tem grande performance em procedimentos de reabilitação e estética
          (facetas e lentes de contato) que têm como objetivo resgatar a função
          e a beleza que há em um sorriso.
          <br />
          <br />
        </p>
      </div>

      <div className={styles.ConteinerGallery}>
        <ImageGallery items={images} autoPlay={true} />
      </div>

      <div className={styles.AboutTeam} id="AboutTeam">
        <div>
          <h1>Nossa equipe</h1>
          <img
            src="/images/icon.png"
            alt="Dr.Alda Calixto"
            className={styles.imgTooth}
          />
        </div>
        <p>
          Ao longo dos anos, Dra. Alda Calixto e sua equipe de profissionais
          experientes trabalham com o compromisso de um atendimento humanizado
          no tratamento dentário, visando devolver qualidade de vida e
          autoestima para seus pacientes, crianças ou adultos.
          <br />
          <br />
          Sua realização profissional está no sentimento de dever cumprido em
          ver alegria nas pessoas com seus sorrisos restabelecidos.
        </p>
      </div>

      <div className={styles.imageTeam}>
        {doctor &&
          doctor.map((item, key) => (
            <div className={styles.contentTeam} key={key}>
              <img src={item.imagem} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>{item.specialty}</p>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.plans} id="plans">
        <div className={styles.titlePlans}>
          <div>
            <img
              src="/images/icon.png"
              alt="Dr.Alda Calixto"
              className={styles.imgTooth}
            />
            <h1>Programa de manutenção preventiva</h1>
          </div>
          <p>
            Comprometidos em transformar vidas e devolver sorrisos, nosso
            programa têm como objetivo incentivar à prevenção da saúde bucal e
            mudar a cultura de que as pessoas devem procurar o dentista apenas
            em situações extremas.
            <br />
            <br />
            Por isso , ofertamos para os que aderem ao programa: consultas
            avaliativas e profilaxias completas ,periódicas e exclusivas ,
            sempre respeitando a individualidade e buscando oque há de melhor
            para o atendimento.
          </p>
          <br />
          <p>Conheça o programa de monitoramento:</p>
          <br />

          <ul className={styles.list}>
            <li>Supervisão da higiene bucal</li>
            <li>Aplicação de flúor e selantes nas limpezas</li>
            <li>Consultas pré-agendadas com a Dra Alda e equipe</li>
            <li>1 escova de dente de excelente qualidade a cada 3 meses</li>
            <li>1 necessaire personalizada</li>
            <li>
              Descontos e formas de pagamento exclusivos nos procedimentos
              odontológicos realizados pela nossa equipe.
            </li>
          </ul>
          <div className={styles.containerButtonPlan}>
            <a
              href="https://api.whatsapp.com/send/?phone=5531998445095&text&app_absent=0"
              className={styles.buttonPlan}
            >
              <p>Saiba mais sobre o programa</p>
            </a>
          </div>
        </div>

        {/* <div className={styles.ConteinerTable}>
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
                  // borderLeft: "solid",
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
                  // borderLeft: "solid",
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
                  // borderLeft: "solid",
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
                  // borderLeft: "solid",
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
                  // borderLeft: "solid",
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
        </div> */}
      </div>

      <div className={styles.Address}>
        <div className={styles.titleAddress}>
          <div>
            <img
              className={styles.imgTooth}
              src="/images/icon.png"
              alt="Dr.Alda Calixto"
            />
            <h1>Nosso endereço</h1>
          </div>
        </div>
      </div>

      <div className={styles.maps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.9102344702765!2d-43.99550178510008!3d-19.886011986628407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691305a6e9f6f%3A0x55ce4e034f99f6c4!2sAv.%20Pres.%20Tancredo%20Neves%2C%202640%20-%20Castelo%2C%20Belo%20Horizonte%20-%20MG%2C%2031330-642!5e0!3m2!1spt-BR!2sbr!4v1628876479994!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
