import Layout from "../components/layout/layout";
import Tabla from "../components/tabla/tabla";
import GlobalStyle from "./globalStyles";

const Tables = () => {
  return (
    <Layout page={"Tablas"}>
      <GlobalStyle />
      <p>Tabla de empleados</p>
      <Tabla />
    </Layout>
  );
};

export default Tables;
