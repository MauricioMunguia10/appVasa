import Layout from "../components/layout/layout";
import GlobalStyle from "./globalStyles";
import CardBirthday from "../components/cardBirthday/CardBirthday";
import { useEffect, useState } from "react";
import { employee } from "../lib/data";
import styles from "../styles/birthday.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Birthday = () => {
  const [empleados, setEmpleados] = useState([]);
  const [filteredEmpleados, setFilteredEmpleados] = useState([]);
  const [month, setMonth] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();

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

  useEffect(() => {
    if (month === "") {
      setFilteredEmpleados(empleados);
    } else {
      const filtered = empleados.filter((empleado) => {
        const monthOfBirthday = new Date(empleado.date_of_birth).getMonth();
        return monthOfBirthday === parseInt(month);
      });
      console.log(filtered);
      setFilteredEmpleados(filtered);
    }
    console.log("Filtered Employees:", filteredEmpleados);
  }, [month, empleados]);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Layout page={"Cumpleaños"}>
      <GlobalStyle />
      <p>Próximos cumpleañeros</p>
      <div className={styles.carrusel}>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {filteredEmpleados.map((empleado) => (
              <CardBirthday
                data={empleado}
                key={empleado.id}
                className={styles.slickSlide}
              />
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};

export default Birthday;
