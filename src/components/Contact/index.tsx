/* eslint-disable @next/next/no-img-element */
import { useState, FormEvent } from "react";
import styles from "./styles.module.scss";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (name.length > 0 && email.length > 0 && phone.length > 0) {
  //     console.log("Sending");
  //     let data = {
  //       name,
  //       email,
  //       phone,
  //     };
  //     fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => {
  //         console.log("Response received");
  //         console.log(res);
  //         if (res.status === 200) {
  //           console.log("Response succeeded!");
  //           setSubmitted(true);
  //           setName("");
  //           setEmail("");
  //           setPhone("");
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //     setName("");
  //     setEmail("");
  //     setPhone("");
  //   } else return;
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "")
      return;
    else {
      console.log("Sending");
      let data = {
        name,
        email,
        phone,
      };
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          console.log("Response succeed");
          setSubmitted(true);
          setName("");
          setEmail("");
          setPhone("");
        }
      } catch {
        (error) => console.log(error);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>
          Para mais informações ou agendar uma consulta, entre em contato
          conosco:
        </h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.containerInput}>
            <div className={styles.input}>
              <p>Digite seu nome:</p>
              <input
                type="text"
                placeholder="Digite seu nome"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className={styles.input}>
              <p>Digite seu telefone:</p>
              <input
                type="text"
                placeholder="Digite seu telefone"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>

          <p>Digite seu e-mail:</p>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <button type="submit">Enviar</button>
        </form>

        <h2>Se preferir, converse conosco através de nossas redes sociais</h2>

        <div className={styles.networks}>
          <a href="https://instagram.com/dra.aldacalixto?utm_medium=copy_link">
            <button>
              <img src="/images/instagramNude.png" alt="" />
            </button>
          </a>
          <a href="">
            <button>
              <img src="/images/whatsappNude.png" alt="" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
