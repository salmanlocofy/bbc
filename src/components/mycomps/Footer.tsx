import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinksSection}>
        <div className={styles.footerLinks}>
          <div className={styles.supportContainer}>
            <div className={styles.support}>Support</div>
            <div className={styles.helpCentre}>Help Centre</div>
            <div className={styles.helpCentre}>AirCover</div>
            <div className={styles.helpCentre}>Combating discrimination</div>
            <div className={styles.helpCentre}>
              Supporting people with disabilities
            </div>
            <div className={styles.helpCentre}>Cencellation options</div>
            <div className={styles.helpCentre}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.supportContainer}>
            <div className={styles.support}>Hosting</div>
            <div className={styles.helpCentre}>Local home</div>
            <div className={styles.helpCentre}>Cover for hosts</div>
            <div className={styles.helpCentre}>Hosting resources</div>
            <div className={styles.helpCentre}>Community forum</div>
            <div className={styles.helpCentre}>Hosting responsibly</div>
          </div>
          <div className={styles.supportContainer}>
            <div className={styles.support}>Localhost</div>
            <div className={styles.helpCentre}>Newsroom</div>
            <div className={styles.helpCentre}>New Features</div>
            <div className={styles.helpCentre}>Careers</div>
            <div className={styles.helpCentre}>Investres</div>
            <div className={styles.helpCentre}>Gift cards</div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomBar}>
        <div className={styles.bottomBarInner}>
          <div className={styles.rightsReserved}>
            © 2023 Localhost, Inc. All Rights Reserved
          </div>
          <div className={styles.tnc}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
            <div className={styles.contactUs}>Contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
