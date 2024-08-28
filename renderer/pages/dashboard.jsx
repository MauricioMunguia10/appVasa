import Layout from "../components/layout/layout";
import GlobalStyle from "./globalStyles";

const Dashboard = () => {
  return (
    <Layout page={"Inicio"}>
      <GlobalStyle />
      <p>Bienvenido al Software de Manejo de Recursos Humanos</p>
    </Layout>
  );
};

export default Dashboard;
