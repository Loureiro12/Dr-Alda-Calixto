/* eslint-disable @next/next/no-img-element */
import { useState, FormEvent } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import Doctor from "../../../public/images/ImageDoctor.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/header.png",
    thumbnail: "/images/header.png",
  },
  {
    original: "/images/imagemTest.jpeg",
    thumbnail: "/images/imagemTest.jpeg",
  },
  {
    original: "/images/header.png",
    thumbnail: "/images/header.png",
  },
];

export function Home() {
  return (
    <>
      <div className={styles.aboutClinic}>
        <div>
          <img
            src="/images/icon.png"
            alt="Dr.Alda Calixto"
            className={styles.imgTooth}
          />
          <h1>Sobre a clínica</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>

      <div className={styles.ConteinerGallery}>
        <ImageGallery items={images} autoPlay={true} />
      </div>

      <div className={styles.AboutTeam}>
        <div>
          <h1>Nossa equipe</h1>
          <img
            src="/images/icon.png"
            alt="Dr.Alda Calixto"
            className={styles.imgTooth}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>

      <div className={styles.imageTeam}>
        <div>
          <img src="/images/doctorImg/Dra.Alda.jpeg" alt="Dra. Alda Calixto" />
          <div>
            <p>Dra. Alda Calixto</p>
            <p>(especialidade)</p>
          </div>
        </div>

        <div>
          <img src="/images/doctorImg/Dra.Luana.jpeg" alt="Dra. Alda Calixto" />
          <div>
            <p>Dra. Luana Godinho</p>
            <p>Clínica Geral</p>
          </div>
        </div>

        <div>
          <img src="/images/doctorImg/Ruth.jpeg" alt="Dra. Alda Calixto" />
          <div>
            <p>Ruth Helena</p>
            <p>Secretária</p>
          </div>
        </div>
      </div>

      <div className={styles.plans}>
        <div className={styles.titlePlans}>
          <div>
            <img
              src="/images/icon.png"
              alt="Dr.Alda Calixto"
              className={styles.imgTooth}
            />
            <h1>Nossos planos</h1>
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
        </div>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.940414883978!2d-44.00971668508632!3d-19.884737786629117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6914c28211fe5%3A0x7eac3f7c2f0f02db!2sR.%20Pontalina%20-%20Pampulha%2C%20Belo%20Horizonte%20-%20MG%2C%2030882-520!5e0!3m2!1spt-BR!2sbr!4v1626133177060!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
