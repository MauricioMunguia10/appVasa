import Head from "next/head";
import GlobalStyle from "../../pages/globalStyles";
import NavBar from "../navBar/NavBar";
import styles from "./layout.module.css";
import { Fragment } from "react";

const Layout = ({ children, page }) => {
  return (
    <Fragment>
      <Head>
        <title>{page} | VASA</title>
      </Head>
      <NavBar />
      <div className={styles.children}>{children}</div>
    </Fragment>
  );
};

export default Layout;
