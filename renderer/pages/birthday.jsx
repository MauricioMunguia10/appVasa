import Layout from "../components/layout/layout";
import GlobalStyle from "./globalStyles";
import CardBirthday from "../components/cardBirthday/CardBirthday";
import { useEffect, useState } from "react";
import { employee } from "../lib/data";
import styles from "../styles/birthday.module.css";

const Birthday = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const sortedEmpleados = [...employee].sort((a, b) => {
      const dateA = new Date(a.date_of_birth);
      const dateB = new Date(b.date_of_birth);
      const nextBirthdayA = new Date(year, dateA.getMonth(), dateA.getDate());
      const nextBirthdayB = new Date(year, dateB.getMonth(), dateB.getDate());
      if (nextBirthdayA < today) nextBirthdayA.setFullYear(year + 1);
      if (nextBirthdayB < today) nextBirthdayB.setFullYear(year + 1);

      return nextBirthdayA - nextBirthdayB;
    });

    setEmpleados(sortedEmpleados);
  }, []);

  return (
    <Layout page={"Cumpleaños"}>
      <GlobalStyle />
      <div className={styles.carrusel}>
        {empleados.map((empleado, index) => (
          <CardBirthday data={empleado} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Birthday;
