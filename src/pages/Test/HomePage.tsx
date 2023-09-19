import { FunctionComponent } from "react";
import HeaderContent from "../../components/HeaderContent";
import FormSection from "../../components/FormSection";
import StaysSection from "../../components/StaysSection";
import Footer from "../../components/mycomps/Footer";
import styles from "../HomePageSalman.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.appHeader}>
        <HeaderContent />
      </header>
      <FormSection />
      <StaysSection />
      <Footer />
    </div>
  );
};

export default HomePage;
