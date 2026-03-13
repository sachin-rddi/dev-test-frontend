import styles from "./Header.module.scss";
import edfMainLogo from "../../assets/edf-main-logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src={edfMainLogo}
        className={`${styles.logo} ${styles.edfText}`}
        alt="EDF Logo"
      />{" "}
      <h1 className={styles.headerText}> Defect Detection Tool</h1>
    </header>
  );
}
