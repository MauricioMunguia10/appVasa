import styles from "./navBar.module.css";
import CakeIcon from "@mui/icons-material/Cake";
import TableChartIcon from "@mui/icons-material/TableChart";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const router = useRouter();
  const handleLogOut = () => {
    router.push("/home");
  };
  return (
    <div className={styles.container}>
      <div className={styles.principalLinks}>
        <Link href={"/dashboard"} className={styles.link}>
          <DashboardIcon className={styles.icon} />
          Inicio
        </Link>
        <Link href={"/birthday"} className={styles.link}>
          <CakeIcon className={styles.icon} />
          Cumpleaños
        </Link>
        <Link href={"/tables"} className={styles.link}>
          <TableChartIcon className={styles.icon} />
          Tablas
        </Link>
        <Link href={"/profile"} className={styles.link}>
          <PersonIcon className={styles.icon} />
          Perfil
        </Link>
      </div>
      <button onClick={handleLogOut} className={styles.logOut}>
        Salir
      </button>
    </div>
  );
};

export default NavBar;
