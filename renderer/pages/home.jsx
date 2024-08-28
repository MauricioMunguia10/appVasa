import Head from "next/head";
import styles from "../styles/home.module.css";
import GlobalStyle from "./globalStyles";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleLogIn = () => {
    router.push("/dashboard");
  };
  const handleSignIn = () => {
    router.push("/signIn");
  };
  return (
    <Fragment>
      <GlobalStyle />
      <Head>
        <title>Log In | VASA</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.titulo}>Iniciar Sesión</p>
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="text"
            placeholder="Correo electrónico"
            className={styles.input}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className={styles.input}
          />

          <button className={styles.logInButton} onClick={handleLogIn}>
            Iniciar Sesión
          </button>
          <button className={styles.signInButton} onClick={handleSignIn}>
            Registrarse
          </button>
        </div>
      </div>
    </Fragment>
  );
}
