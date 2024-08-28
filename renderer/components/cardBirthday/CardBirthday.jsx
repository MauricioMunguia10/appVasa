import Image from "next/image";
import styles from "./cardBirthday.module.css";
import { useEffect, useState } from "react";
const CardBirthday = ({ data }) => {
  const [src, setSrc] = useState("/images/man.png");
  useEffect(() => {
    data.gender === "Female"
      ? setSrc("/images/women.png")
      : setSrc("/images/man.png");
  }, []);
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt="perfil"
        width={150}
        height={150}
        className={styles.imagen}
      />
      <p>No. {data?.id}</p>
      <p>Nombre: {data?.name}</p>
      <p>Cumpleaños: {data?.date_of_birth}</p>
    </div>
  );
};

export default CardBirthday;
