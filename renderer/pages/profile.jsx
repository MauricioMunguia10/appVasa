import Image from "next/image";
import Layout from "../components/layout/layout";
import GlobalStyle from "./globalStyles";
import { useState } from "react";

const Profile = () => {
  const [clase, setClase] = useState({ display: "none" });
  const changeImage = () => {
    setClase({ display: "block", position: "absolute", left: "400px" });
  };
  const nullImage = () => {
    setClase({ display: "none" });
  };
  return (
    <Layout page={"Perfil"}>
      <GlobalStyle />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <p onClick={changeImage}>...en proceso...</p>
        <Image
          src="/images/homer.jpg"
          alt="homer"
          width={500}
          height={500}
          style={clase}
          onClick={nullImage}
        />
      </div>
    </Layout>
  );
};

export default Profile;
