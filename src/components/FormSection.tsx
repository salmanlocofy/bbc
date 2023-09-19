import { FunctionComponent } from "react";
import SearchFormContainer from "./SearchFormContainer";
import styles from "./FormSection.module.css";

const FormSection: FunctionComponent = () => {
  return (
    <div className={styles.searchSection}>
      <SearchFormContainer />
    </div>
  );
};

export default FormSection;
