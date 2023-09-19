import { FunctionComponent } from "react";
import styles from "./ListingItem.module.css";

type ListingItemType = {
  image?: string;
  superhostTag?: boolean;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  trendIcon?: string;
  heartIcon?: string;
  bestTime?: boolean;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  image,
  superhostTag,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  trendIcon,
  heartIcon,
  bestTime,
}) => {
  return (
    <div className={styles.listingItem}>
      <img className={styles.imageIcon} alt="" src={image} />
      {!superhostTag && (
        <div className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </div>
      )}
      <img className={styles.heartIcon} alt="" src={heartIcon} />
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.listingTitle}>{rating}</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.listingTitle}>{price}</div>
            <div className={styles.listingSubtitle}>/night</div>
          </div>
          {!bestTime && (
            <button className={styles.bestTime}>
              <img className={styles.trendIcon} alt="" src={trendIcon} />
              <div className={styles.priceChart}>Price chart</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
