import { FunctionComponent, useState, useRef, useCallback } from "react";
import AccountInfoPopup from "./AccountInfoPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HeaderContent.module.css";

const HeaderContent: FunctionComponent = () => {
  const accountInfoRef = useRef<HTMLButtonElement>(null);
  const [isAccountInfoPopupOpen, setAccountInfoPopupOpen] = useState(false);

  const openAccountInfoPopup = useCallback(() => {
    setAccountInfoPopupOpen(true);
  }, []);

  const closeAccountInfoPopup = useCallback(() => {
    setAccountInfoPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>Stays</div>
          <div className={styles.home}>Become a host</div>
        </div>
        <div className={styles.loginSection}>
          <img className={styles.alertsIcon} alt="" src="/alerts.svg" />
          <button
            className={styles.accountInfo}
            ref={accountInfoRef}
            onClick={openAccountInfoPopup}
          >
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
          </button>
        </div>
      </div>
      {isAccountInfoPopupOpen && (
        <PortalPopup
          placement="Bottom right"
          right={-5}
          bottom={5}
          relativeLayerRef={accountInfoRef}
          onOutsideClick={closeAccountInfoPopup}
        >
          <AccountInfoPopup onClose={closeAccountInfoPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HeaderContent;
