import Layout from "../components/layout/layout";
import Tabla from "../components/tabla/tabla";
import GlobalStyle from "./globalStyles";

const Tables = () => {
  return (
    <Layout page={"Tablas"}>
      <GlobalStyle />
      <Tabla />
    </Layout>
  );
};

export default Tables;
