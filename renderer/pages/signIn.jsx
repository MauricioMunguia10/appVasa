import Head from "next/head";
import styles from "../styles/signIn.module.css";
import GlobalStyle from "./globalStyles";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const handleLogIn = () => {
    router.push("/home");
  };
  const handleSignIn = () => {
    router.push("/dashboard");
  };
  return (
    <Fragment>
      <GlobalStyle />
      <Head>
        <title>Sign In | MMG</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.titulo}>Registrarse</p>
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
          <label htmlFor="password">Repita contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className={styles.input}
          />

          <button className={styles.signInButton} onClick={handleSignIn}>
            Registrarse
          </button>
          <p>¿Ya tiene cuenta?</p>
          <button className={styles.logInButton} onClick={handleLogIn}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default SignIn;
