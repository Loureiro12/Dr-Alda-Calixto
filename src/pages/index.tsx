import Head from "next/head";
import Image from "next/image";

import styles from "./home.module.scss";

import Contato from "./Contato";
import { Home } from "../components/Home";

import Doctor from "../../public/images/ImageDoctor.png";

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

export default function Page() {
  return (
    <>
      <Head>
        <title>Home | Dr. Alda Calixto</title>
      </Head>
      <main className={styles.contentContainer}>
        <Home />
      </main>
    </>
  );
}
