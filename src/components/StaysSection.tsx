import { FunctionComponent, useState, useRef, useCallback } from "react";
import Graph from "./mycomps/Graph";
import PortalPopup from "./PortalPopup";
import ListingItem from "./ListingItem";
import styles from "./StaysSection.module.css";

const StaysSection: FunctionComponent = () => {
  const bestTimeRef = useRef<HTMLButtonElement>(null);
  const [isGraphPopupOpen, setGraphPopupOpen] = useState(false);

  const openGraphPopup = useCallback(() => {
    setGraphPopupOpen(true);
  }, []);

  const closeGraphPopup = useCallback(() => {
    setGraphPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.staysSection}>
        <div className={styles.homes}>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Cabin</div>
                  <div className={styles.listingSubtitle}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>4.9</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$658</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button
                  className={styles.bestTime}
                  ref={bestTimeRef}
                  onClick={openGraphPopup}
                >
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <ListingItem
            image="/image1@2x.png"
            superhostTag={false}
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            trendIcon="/trend-icon.svg"
            heartIcon="/hearticon.svg"
            bestTime={false}
          />
          <ListingItem
            image="/image2@2x.png"
            superhostTag
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            trendIcon="/trend-icon1.svg"
            heartIcon="/hearticon.svg"
            bestTime={false}
          />
          <ListingItem
            image="/image3@2x.png"
            superhostTag
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            trendIcon="/trend-icon2.svg"
            heartIcon="/hearticon1.svg"
            bestTime
          />
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image4@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Missisuaga Aistream</div>
                  <div className={styles.listingSubtitle}>
                    Missisauga, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>4.8</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$502</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <ListingItem
            image="/image5@2x.png"
            superhostTag={false}
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            trendIcon="/trend-icon.svg"
            heartIcon="/hearticon.svg"
            bestTime={false}
          />
          <ListingItem
            image="/image6@2x.png"
            superhostTag={false}
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            trendIcon="/trend-icon1.svg"
            heartIcon="/hearticon.svg"
            bestTime
          />
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image7@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon1.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Lawrence Hills</div>
                  <div className={styles.listingSubtitle}>
                    Lawrence, Ontario Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$350</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon2.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image8@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Simcoe Lake Lodge</div>
                  <div className={styles.listingSubtitle}>
                    Simcoe, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$395</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image9@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Wasaga Beach Home</div>
                  <div className={styles.listingSubtitle}>
                    Georgina Bay, Ontario, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image10@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Banff Hills</div>
                  <div className={styles.listingSubtitle}>
                    Banff, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon1.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image11@2x.png"
            />
            <div className={styles.superhostTag}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon1.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Creemore Canada</div>
                  <div className={styles.listingSubtitle}>
                    Creemore, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon2.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image12@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Kawartha Lakes</div>
                  <div className={styles.listingSubtitle}>
                    Kawartha, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image13@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Revelstoke Cabin</div>
                  <div className={styles.listingSubtitle}>
                    Revelstoke, Alberta, Canada
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime}>
                  <img
                    className={styles.trendIcon}
                    alt=""
                    src="/trend-icon.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image14@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Estate</div>
                  <div className={styles.listingSubtitle}>
                    Brightwoods Estate
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon1.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.listingItem}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/image15@2x.png"
            />
            <div className={styles.superhostTag1}>
              <img
                className={styles.superhostIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <img className={styles.heartIcon} alt="" src="/hearticon1.svg" />
            <div className={styles.itemDetails}>
              <div className={styles.listingInfo}>
                <div className={styles.listingCont}>
                  <div className={styles.listingTitle}>Brightwoods Estate</div>
                  <div className={styles.listingSubtitle}>
                    Brightwoods Estate
                  </div>
                </div>
                <div className={styles.ratingCont}>
                  <div className={styles.listingTitle}>5.0</div>
                  <img
                    className={styles.starIcon}
                    alt=""
                    src="/star-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.bottomContainer}>
                <div className={styles.pricePerNight}>
                  <div className={styles.listingTitle}>$385</div>
                  <div className={styles.listingSubtitle}>/night</div>
                </div>
                <button className={styles.bestTime2}>
                  <img
                    className={styles.trendIcon2}
                    alt=""
                    src="/trend-icon2.svg"
                  />
                  <div className={styles.priceChart}>Price chart</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showMoreButton}>
          <div className={styles.showMoreText}>Show more</div>
        </div>
      </div>
      {isGraphPopupOpen && (
        <PortalPopup
          placement="Top left"
          relativeLayerRef={bestTimeRef}
          onOutsideClick={closeGraphPopup}
        >
          <Graph onClose={closeGraphPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StaysSection;
