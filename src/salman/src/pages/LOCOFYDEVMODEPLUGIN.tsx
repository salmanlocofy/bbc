import { FunctionComponent } from "react";
import DevModePlugin from "../components/DevModePlugin";
import styles from "./LOCOFYDEVMODEPLUGIN.module.css";

const LOCOFYDEVMODEPLUGIN: FunctionComponent = () => {
  return (
    <div className={styles.locofyDevModePlugin}>
      <img
        className={styles.screenshot20231019At129}
        alt=""
        src="/screenshot-20231019-at-129-1@2x.png"
      />
      <div className={styles.container}>
        <div className={styles.labelWrapper}>
          <b className={styles.label}>City</b>
        </div>
      </div>
      <DevModePlugin />
    </div>
  );
};

export default LOCOFYDEVMODEPLUGIN;
