import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Header from "../../components/Layout/Header";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.homePage}>
        <div className={styles.title}></div>
        <div className={styles.subtitle}>
          <h3>Upload an image to detect defects.</h3>
        </div>
        <ImageUploader />
      </div>
    </>
  );
};

export default Home;
