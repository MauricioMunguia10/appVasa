import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    window.ipc.on("message", (message) => {
      setMessage(message);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home | MMG</title>
      </Head>
      <div className={styles.container}>
        <Link href="/about">Go to About page</Link>
        <div className={styles.card}>
          <p>Iniciar Sesión</p>
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
      </div>
    </React.Fragment>
  );
}
