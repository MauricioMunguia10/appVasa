import Layout from "../components/layout/layout";
import GlobalStyle from "./globalStyles";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "../styles/dashboard.module.css";
import { PieChart } from "@mui/x-charts";

const Dashboard = () => {
  return (
    <Layout page={"Inicio"}>
      <GlobalStyle />
      <p>Bienvenido al Software de Manejo de Recursos Humanos</p>
      <div className={styles.caja}>
        <div>
          <p>Rendimiento</p>
          <LineChart
            xAxis={[{ data: [0, 1, 2, 3, 5, 7, 8, 10] }]}
            series={[
              {
                data: [0, 5, 5.5, 7, 8.5, 7.5, 6.9, 8.4],
              },
            ]}
            width={500}
            height={250}
          />
        </div>
        <div>
          <p>Crecimiento</p>
          <LineChart
            xAxis={[{ data: [0, 1, 2, 3, 5, 7, 8, 10] }]}
            series={[
              {
                data: [0, 2, 3.5, 4, 5, 4.5, 5.5, 6.2],
              },
            ]}
            width={500}
            height={250}
          />
        </div>
      </div>
      <div className={styles.caja}>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Primer Trimestre" },
                { id: 1, value: 15, label: "Segundo Trimestre" },
                { id: 2, value: 20, label: "Tercer Trimestre" },
                { id: 3, value: 20, label: "Tercer Trimestre" },
              ],
            },
          ]}
          width={500}
          height={200}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
