import { FunctionComponent } from "react";
import styles from "./AccountInfoPopup.module.css";

type AccountInfoPopupType = {
  onClose?: () => void;
};

const AccountInfoPopup: FunctionComponent<AccountInfoPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.accountInfoPopup}>
      <div className={styles.userInfoMain}>
        <img className={styles.avatarIcon} alt="" src="/avatar1@2x.png" />
        <div className={styles.userInfo}>
          <div className={styles.wesleyBernard}>Wesley Bernard</div>
          <div className={styles.wesleybernardgmailcom}>
            wesley.bernard@gmail.com
          </div>
        </div>
      </div>
      <div className={styles.linksGroup}>
        <div className={styles.accountSettings}>Account settings</div>
        <div className={styles.accountSettings}>Bookings</div>
        <div className={styles.accountSettings}>Payments</div>
      </div>
      <div className={styles.accountSettings}>Help Centre</div>
      <div className={styles.accountSettings}>Logout</div>
    </div>
  );
};

export default AccountInfoPopup;
