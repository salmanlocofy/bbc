import { FunctionComponent, useState } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <img
              className={styles.logoblueIcon}
              alt=""
              src="/LogoBlue@2x.png"
            />
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <div className={styles.navigationlink}>
                  <button className={styles.text}>Explore</button>
                </div>
                <div className={styles.navigationlink1}>
                  <button className={styles.text1}>Search</button>
                </div>
                <div className={styles.navigationlink2}>
                  <button className={styles.text2}>Hotels</button>
                </div>
                <div className={styles.navigationlink3}>
                  <button className={styles.text3}>Offers</button>
                </div>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img className={styles.icon} alt="" src="/notification1.svg" />
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.mainSection}>
          <div className={styles.searchSection}>
            <div className={styles.titleParent}>
              <div className={styles.title}>
                <div
                  className={styles.letsExplore}
                >{`Let’s explore & travel the worldss`}</div>
                <i className={styles.findTheBest}>
                  Find the best destinations and the most popular stays!
                </i>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.formTitleGroup}>
                  <div className={styles.searchFlightsWrapper}>
                    <i className={styles.searchFlights}>Search flights</i>
                  </div>
                  <div className={styles.flightOptions}>
                    <div className={styles.flightType}>
                      <FormControlLabel
                        label="Return"
                        labelPlacement="end"
                        control={<Radio size="medium" />}
                      />
                      <FormControlLabel
                        label="One-way"
                        labelPlacement="end"
                        control={
                          <Radio color="primary" checked size="medium" />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formInputsRow}>
                  <div className={styles.inputsRow}>
                    <Autocomplete
                      className={styles.departureField}
                      size="medium"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                    />
                    <Autocomplete
                      className={styles.arrivalField}
                      disablePortal
                      options={[
                        "Los Angeles (LA)",
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                    />
                    <div className={styles.selectoutlined}>
                      <DatePicker
                        label="Date"
                        value={selectOutlinedDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setSelectOutlinedDateTimePickerValue(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <button className={styles.button}>
                    <i className={styles.text4}>Search</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContents}>
            <div className={styles.upcomingFlightSection}>
              <div className={styles.upcomingFlightSection1}>
                <i className={styles.recentSearches}>Recent Searches</i>
                <div className={styles.flightDetails}>
                  <div className={styles.recentSearches1}>
                    <div className={styles.flightmaincontainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.details}>
                          <i className={styles.departurecitycode}>SIN</i>
                          <i className={styles.departurecity}>Singapore</i>
                        </div>
                        <div className={styles.flightIcons}>
                          <div className={styles.point} />
                          <div className={styles.flightIconsChild} />
                          <img
                            className={styles.ionairplaneIcon}
                            alt=""
                            src="/ionairplane.svg"
                          />
                          <div className={styles.flightIconsItem} />
                          <div className={styles.point1} />
                        </div>
                        <div className={styles.details1}>
                          <i className={styles.destinationcitycode}>LAX</i>
                          <i className={styles.destinationcity}>Los Angeles</i>
                        </div>
                      </div>
                      <div className={styles.departOnParent}>
                        <i className={styles.departOn}>Depart on:</i>
                        <i className={styles.date}>7 Sep 2021</i>
                      </div>
                    </div>
                    <div className={styles.flightmaincontainer1}>
                      <div className={styles.toAndFrom1}>
                        <div className={styles.details2}>
                          <i className={styles.departurecitycode1}>LHR</i>
                          <i className={styles.departurecity1}>London</i>
                        </div>
                        <div className={styles.flightIcons1}>
                          <div className={styles.point2} />
                          <div className={styles.flightIconsInner} />
                          <img
                            className={styles.ionairplaneIcon1}
                            alt=""
                            src="/ionairplane.svg"
                          />
                          <div className={styles.lineDiv} />
                          <div className={styles.point3} />
                        </div>
                        <div className={styles.details3}>
                          <i className={styles.destinationcitycode1}>DUB</i>
                          <i className={styles.destinationcity1}>Dubai</i>
                        </div>
                      </div>
                      <div className={styles.departOnGroup}>
                        <i className={styles.departOn1}>Depart on:</i>
                        <i className={styles.date1}>9 Sep 2021</i>
                      </div>
                    </div>
                  </div>
                  <div className={styles.prepareMenu}>
                    <i className={styles.prepareForYour}>
                      Prepare for your trip
                    </i>
                    <div className={styles.tripMenus}>
                      <div className={styles.tripitem}>
                        <img
                          className={styles.icon1}
                          alt=""
                          src="/icon@2x.png"
                        />
                        <i className={styles.text5}>Hotel</i>
                      </div>
                      <div className={styles.tripitem1}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon1@2x.png"
                        />
                        <i className={styles.text6}>Attractions</i>
                      </div>
                      <div className={styles.tripitem2}>
                        <img
                          className={styles.icon3}
                          alt=""
                          src="/icon2@2x.png"
                        />
                        <i className={styles.text7}>Eats</i>
                      </div>
                      <div className={styles.tripitem3}>
                        <img
                          className={styles.icon4}
                          alt=""
                          src="/icon3@2x.png"
                        />
                        <i className={styles.text8}>Commute</i>
                      </div>
                      <div className={styles.tripitem4}>
                        <img
                          className={styles.icon5}
                          alt=""
                          src="/icon4@2x.png"
                        />
                        <i className={styles.text9}>Taxi</i>
                      </div>
                      <div className={styles.tripitem5}>
                        <img
                          className={styles.icon6}
                          alt=""
                          src="/icon5@2x.png"
                        />
                        <i className={styles.text10}>Movies</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitles}>
                <div className={styles.titleContainer}>
                  <i className={styles.planYourNext}>Plan your next trip</i>
                  <i className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </i>
                </div>
                <button className={styles.viewAllTop}>
                  <i className={styles.viewAllDestinations}>
                    View all destinations
                  </i>
                  <img
                    className={styles.arrowrighticon}
                    alt=""
                    src="/arrowrighticon@2x.png"
                  />
                </button>
              </div>
              <div className={styles.cardsContainer}>
                <div className={styles.destinationcard}>
                  <i className={styles.city}>Paris</i>
                  <div className={styles.details4}>
                    <i className={styles.from}>from</i>
                    <div className={styles.price}>$699</div>
                  </div>
                </div>
                <div className={styles.destinationcard1}>
                  <i className={styles.city1}>Greece</i>
                  <div className={styles.details5}>
                    <i className={styles.from1}>from</i>
                    <div className={styles.price1}>$1079</div>
                  </div>
                </div>
                <div className={styles.destinationcard2}>
                  <i className={styles.city2}>Norway</i>
                  <div className={styles.details6}>
                    <i className={styles.from2}>from</i>
                    <div className={styles.price2}>$895</div>
                  </div>
                </div>
                <div className={styles.destinationcard3}>
                  <i className={styles.city3}>Tuscany</i>
                  <div className={styles.details7}>
                    <i className={styles.from3}>from</i>
                    <div className={styles.price3}>$1245</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitle}>
                <i className={styles.recommendedHolidays}>
                  Recommended Holidays
                </i>
                <button className={styles.viewAllHolidaysParent}>
                  <i className={styles.viewAllHolidays}>View all holidays</i>
                  <img
                    className={styles.arrowrighticon1}
                    alt=""
                    src="/arrowrighticon1@2x.png"
                  />
                </button>
              </div>
              <div className={styles.recCardsContainer}>
                <button className={styles.holidaycard}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.container}>
                      <i className={styles.city4}>Bali</i>
                      <i className={styles.id}>4D3N</i>
                    </div>
                    <div className={styles.price4}>$899</div>
                  </div>
                </button>
                <button className={styles.holidaycard1}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image1@2x.png"
                  />
                  <div className={styles.holidayDetails1}>
                    <div className={styles.container1}>
                      <i className={styles.city5}>Bali</i>
                      <i className={styles.id1}>6D5N</i>
                    </div>
                    <div className={styles.price5}>$900</div>
                  </div>
                </button>
                <button className={styles.holidaycard2}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image2@2x.png"
                  />
                  <div className={styles.holidayDetails2}>
                    <div className={styles.container2}>
                      <i className={styles.city6}>Bali</i>
                      <i className={styles.id2}>5D4N</i>
                    </div>
                    <div className={styles.price6}>$699</div>
                  </div>
                </button>
                <button className={styles.holidaycard3}>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/image3@2x.png"
                  />
                  <div className={styles.holidayDetails3}>
                    <div className={styles.container3}>
                      <i className={styles.city7}>Bali</i>
                      <i className={styles.id3}>4D3N</i>
                    </div>
                    <div className={styles.price7}>$789</div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <i className={styles.viewAllHolidays1}>View all holidays</i>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className={styles.popularStays}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <i className={styles.popularStays1}>Popular Stays</i>
                </div>
                <button className={styles.viewAllStaysButton}>
                  <i className={styles.viewAllStays}>View all stays</i>
                  <img
                    className={styles.arrowrighticon2}
                    alt=""
                    src="/arrowrighticon1@2x.png"
                  />
                </button>
              </div>
              <div className={styles.hotelCards}>
                <div className={styles.hotelcard}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/image4@2x.png"
                  />
                  <div className={styles.stayDetails}>
                    <div className={styles.stayDetailsRows}>
                      <i className={styles.hoteltype}>Entire bungalow</i>
                      <i className={styles.hotelname}>Matterhorn Suites</i>
                      <i className={styles.price8}>$575/night</i>
                    </div>
                    <img className={styles.videoIcon} alt="" src="/video.svg" />
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector1.svg"
                      />
                      <i className={styles.rating1}>4.9</i>
                    </div>
                    <i className={styles.reviews}>(60 reviews)</i>
                  </div>
                  <div className={styles.moreDetailsButton}>
                    <i className={styles.button1}>More details</i>
                  </div>
                </div>
                <div className={styles.hotelcard1}>
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/image5@2x.png"
                  />
                  <div className={styles.stayDetails1}>
                    <div className={styles.stayDetailsRows1}>
                      <i className={styles.hoteltype1}>
                        2-Story beachfront suite
                      </i>
                      <i className={styles.hotelname1}>Discovery Shores</i>
                      <i className={styles.price9}>$360/night</i>
                    </div>
                    <img
                      className={styles.videoIcon1}
                      alt=""
                      src="/video.svg"
                    />
                  </div>
                  <div className={styles.rating2}>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector1.svg"
                      />
                      <i className={styles.rating3}>4.8</i>
                    </div>
                    <i className={styles.reviews1}>(116 reviews)</i>
                  </div>
                  <div className={styles.moreDetailsButton1}>
                    <i className={styles.button2}>More details</i>
                  </div>
                </div>
                <div className={styles.hotelcard2}>
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className={styles.stayDetails2}>
                    <div className={styles.stayDetailsRows2}>
                      <i className={styles.hoteltype2}>Single deluxe hut</i>
                      <i className={styles.hotelname2}>{`Arctic Hut `}</i>
                      <i className={styles.price10}>$420/night</i>
                    </div>
                    <img
                      className={styles.videoIcon2}
                      alt=""
                      src="/video.svg"
                    />
                  </div>
                  <div className={styles.rating4}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector1.svg"
                      />
                      <i className={styles.rating5}>4.7</i>
                    </div>
                    <i className={styles.reviews2}>(78 reviews)</i>
                  </div>
                  <div className={styles.moreDetailsButton2}>
                    <i className={styles.button3}>More details</i>
                  </div>
                </div>
                <div className={styles.hotelcard3}>
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/image7@2x.png"
                  />
                  <div className={styles.stayDetails3}>
                    <div className={styles.stayDetailsRows3}>
                      <i className={styles.hoteltype3}>Lake Louise Inn</i>
                      <i className={styles.hotelname3}>{`Arctic Hut `}</i>
                      <i className={styles.price11}>$224/night</i>
                    </div>
                    <img
                      className={styles.videoIcon3}
                      alt=""
                      src="/video.svg"
                    />
                  </div>
                  <div className={styles.rating6}>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector1.svg"
                      />
                      <i className={styles.rating7}>4.6</i>
                    </div>
                    <i className={styles.reviews3}>(63 reviews)</i>
                  </div>
                  <div className={styles.moreDetailsButton3}>
                    <i className={styles.button4}>More details</i>
                  </div>
                </div>
              </div>
              <div className={styles.mobileViewAllStays}>
                <i className={styles.viewAllStays1}>View all stays</i>
                <img
                  className={styles.arrowRightIcon1}
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.subscribesection}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <i className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </i>
                <i className={styles.formTitle}>Get weekly updates</i>
              </div>
              <form className={styles.form}>
                <i className={styles.fillInYour}>
                  Fill in your details to join the party!
                </i>
                <div className={styles.formFields}>
                  <TextField
                    className={styles.nameInput}
                    color="primary"
                    label="Your name"
                    variant="outlined"
                    sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                  />
                  <TextField
                    className={styles.emailInput}
                    color="primary"
                    label="Email address"
                    variant="outlined"
                    type="email"
                    sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                  />
                </div>
                <button className={styles.button5}>
                  <i className={styles.text11}>Search</i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.fickleflightBioParent}>
            <div className={styles.fickleflightBio}>
              <img
                className={styles.logowhiteIcon}
                alt=""
                src="/logowhite@2x.png"
              />
              <i className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </i>
              <div className={styles.socialMediaLinksContainer}>
                <div className={styles.socialMediaLink}>
                  <img
                    className={styles.facebookIcon}
                    alt=""
                    src="/facebook@2x.png"
                  />
                </div>
                <div className={styles.socialMediaLink1}>
                  <img
                    className={styles.instagramIcon}
                    alt=""
                    src="/instagram@2x.png"
                  />
                </div>
                <div className={styles.socialMediaLink2}>
                  <img
                    className={styles.twitterIcon}
                    alt=""
                    src="/twitter@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.containers}>
              <i className={styles.company}>Company</i>
              <div className={styles.linkContainer}>
                <i className={styles.aboutUs}>About Us</i>
                <i className={styles.news}>News</i>
                <i className={styles.careers}>Careers</i>
                <i className={styles.howWeWork}>How we work</i>
              </div>
            </div>
            <div className={styles.containers1}>
              <i className={styles.support}>Support</i>
              <div className={styles.linkContainer1}>
                <i className={styles.account}>Account</i>
                <i className={styles.supportCenter}>Support Center</i>
                <i className={styles.faq}>FAQ</i>
                <i className={styles.accessibility}>Accessibility</i>
              </div>
            </div>
            <div className={styles.containers2}>
              <i className={styles.more}>More</i>
              <div className={styles.linkContainer2}>
                <i className={styles.covidAdvisory}>Covid Advisory</i>
                <i className={styles.airlineFees}>Airline Fees</i>
                <i className={styles.tips}>Tips</i>
                <i className={styles.quarantineRules}>Quarantine Rules</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Homepage;
