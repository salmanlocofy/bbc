import { FunctionComponent } from "react";
import styles from "../Graph.module.css";

type GraphType = {
  onClose?: () => void;
};

const Graph: FunctionComponent<GraphType> = ({ onClose }) => {
  return (
    <div className={styles.graph}>
      <img className={styles.graphLinesIcon} alt="" src="/graph-lines.svg" />
      <div className={styles.prices}>
        <div className={styles.div}>$700</div>
        <div className={styles.div1}>$650</div>
        <div className={styles.div2}>$600</div>
        <div className={styles.div3}>$550</div>
        <div className={styles.div4}>$500</div>
        <div className={styles.div5}>$450</div>
        <div className={styles.div6}>$400</div>
      </div>
      <div className={styles.months}>
        <div className={styles.div}>Sep</div>
        <div className={styles.oct}>Oct</div>
        <div className={styles.nov}>Nov</div>
        <div className={styles.dec}>Dec</div>
        <div className={styles.jan}>Jan</div>
        <div className={styles.feb}>Feb</div>
        <div className={styles.mar}>Mar</div>
        <div className={styles.apr}>Apr</div>
        <div className={styles.may}>May</div>
        <div className={styles.jun}>Jun</div>
        <div className={styles.jul}>Jul</div>
        <div className={styles.aug}>Aug</div>
      </div>
      <img className={styles.graphIcon} alt="" src="/graph.svg" />
      <div className={styles.location}>
        <div className={styles.locationName}>Brightwoods Cabin</div>
        <div className={styles.rect} />
      </div>
      <button className={styles.iconclose} onClick={onClose}>
        <img className={styles.icon} alt="" src="/icon.svg" />
      </button>
    </div>
  );
};

export default Graph;
