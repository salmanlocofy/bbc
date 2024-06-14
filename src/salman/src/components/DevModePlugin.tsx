import { FunctionComponent } from "react";
import styles from "./DevModePlugin.module.css";

export type DevModePluginType = {
  className?: string;
};

const DevModePlugin: FunctionComponent<DevModePluginType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.devModePlugin, className].join(" ")}>
      <div className={styles.figmaDevmodeTabplugin}>
        <div className={styles.inspect}>Inspect</div>
        <b className={styles.plugins}>Plugins</b>
      </div>
      <div className={styles.dmpluginHeader}>
        <div className={styles.group2Wrapper}>
          <input className={styles.group2} type="radio" name="radioGroup-1" />
        </div>
        <div className={styles.locofyFreeBetaFigmaToReWrapper}>
          <div className={styles.locofyFreeBeta}>
            Locofy FREE BETA - Figma to React, React Native, HTML/CSS, Next.js,
            Gatsby, Vue
          </div>
        </div>
        <div className={styles.iconjclose}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className={styles.dmframeworkDropdown}>
        <img
          className={styles.dmframeworkDropdownChild}
          loading="lazy"
          alt=""
          src="/group-142176.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.languageItemParent}>
            <div className={styles.languageItem}>
              <input
                className={styles.frameworkColorReact}
                type="radio"
                name="radioGroup-1"
              />
              <div className={styles.react}>React</div>
            </div>
            <img
              className={styles.chevrondownIcon}
              loading="lazy"
              alt=""
              src="/chevrondown.svg"
            />
          </div>
          <div className={styles.typescriptCssModulesParent}>
            <div className={styles.typescriptCssModules}>
              Typescript, CSS Modules
            </div>
            <img
              className={styles.chevrondownIcon1}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.devModePluginChild}
        alt=""
        src="/group-1000001122.svg"
      />
      <img className={styles.iconhelp} alt="" src="/iconhelp.svg" />
      <div className={styles.wizardBreadcrumbParent}>
        <div className={styles.wizardBreadcrumb}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/vector-407.svg"
              />
            </div>
          </div>
          <b className={styles.stepFlowWizard}>Lightning</b>
        </div>
        <div className={styles.topTabs}>
          <div className={styles.selectedFrames3Parent}>
            <div className={styles.selectedFrames3}>Selected frames (1)</div>
            <div className={styles.iconCheckSolidParent}>
              <img
                className={styles.iconCheckSolid}
                alt=""
                src="/icon--checksolid.svg"
              />
              <div className={styles.frameIsReady}>1 frame is ready</div>
            </div>
            <div className={styles.iconCheckSolidGroup}>
              <img
                className={styles.iconCheckSolid1}
                loading="lazy"
                alt=""
                src="/icon--checksolid-1.svg"
              />
              <div className={styles.allFramesAre}>All frames are ready</div>
            </div>
          </div>
          <div className={styles.selectedLayerTab}>
            <div className={styles.selectedLayer}>
              <div className={styles.icongrayautolayoutrowleft}>
                <div className={styles.icongrayautolayoutrowleftChild} />
                <div className={styles.icongrayautolayoutrowleftItem} />
                <div className={styles.icongrayautolayoutrowleftInner} />
              </div>
              <div className={styles.homeScreen}>Home screen</div>
              <img
                className={styles.selectedLayerChild}
                alt=""
                src="/vector-35.svg"
              />
              <img
                className={styles.ggcheckOIcon}
                loading="lazy"
                alt=""
                src="/ggchecko.svg"
              />
            </div>
            <div className={styles.selectedLayer1}>
              <img
                className={styles.icongrayframe}
                alt=""
                src="/icongrayframe.svg"
              />
              <div className={styles.propertyDetails}>Property Details</div>
              <img
                className={styles.selectedLayerItem}
                alt=""
                src="/vector-35.svg"
              />
              <img className={styles.locoLoadIcon} alt="" src="/locoload.svg" />
            </div>
            <div className={styles.selectedLayer2}>
              <img
                className={styles.icongrayframe1}
                alt=""
                src="/icongrayframe.svg"
              />
              <div className={styles.bookingSuccess}>Booking Success</div>
              <img
                className={styles.selectedLayerInner}
                alt=""
                src="/vector-35.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.scanningSectionParent}>
          <div className={styles.scanningSection}>
            <div className={styles.progressInfo}>
              <div className={styles.conversionStatus}>
                <img
                  className={styles.pulsateIcon}
                  alt=""
                  src="/pulsate@2x.png"
                />
                <div className={styles.stepCompletion}>
                  <div className={styles.stepCodeConversion}>
                    1-Step code conversion completed for
                  </div>
                  <b className={styles.homeScreen1}>Home screen</b>
                </div>
              </div>
              <img
                className={styles.progressInfoChild}
                alt=""
                src="/group-1000001165.svg"
              />
            </div>
            <div className={styles.progressBar}>
              <div className={styles.frameGroup}>
                <div className={styles.progressWrapper}>
                  <div className={styles.progress}>Progress</div>
                </div>
                <b className={styles.progressValue}>100%</b>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.progressFill}>
                  <div className={styles.progressFillChild} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dmsectionpreview1step}>
            <div className={styles.previewHeader}>
              <b className={styles.preview}>Preview</b>
              <div className={styles.sizeChangeexpand}>
                <div className={styles.expand}>Expand</div>
                <div className={styles.iconexpand}>
                  <img
                    className={styles.iconexpandChild}
                    loading="lazy"
                    alt=""
                    src="/group-10000011221.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.imagePreview}>
              <div className={styles.wrapperImage1}>
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className={styles.iconzoom}>
                <div className={styles.iconzoomInner}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1000001121.svg"
                  />
                </div>
                <div className={styles.iconzoomChild}>
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/vector-650.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.codeOptionsParent}>
            <div className={styles.codeOptions}>
              <div className={styles.languageOptions}>
                <b className={styles.react1}>React</b>
                <div className={styles.typescriptCssVariables}>
                  Typescript, CSS Variables, CSS Modules, Pascal Case
                </div>
              </div>
              <div className={styles.codeExpand}>
                <div className={styles.sizeChangeexpand1}>
                  <div className={styles.expandWrapper}>
                    <div className={styles.expand1}>Expand</div>
                  </div>
                  <div className={styles.iconexpand1}>
                    <img
                      className={styles.iconexpandItem}
                      loading="lazy"
                      alt=""
                      src="/group-10000011221.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.codeSnippet}>
              <div className={styles.homescreentsx}>homeScreen.tsx</div>
              <div className={styles.homescreencss}>homeScreen.css</div>
              <div className={styles.codeHighlight}>
                <div className={styles.codeHighlightChild} />
                <img
                  className={styles.codeHighlightItem}
                  loading="lazy"
                  alt=""
                  src="/frame-1000005530@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.syncStatusWrapper}>
        <div className={styles.syncStatus}>
          <div className={styles.syncInfo}>
            <div className={styles.syncDetails}>
              <div className={styles.syncTime}>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-1000001424.svg"
                  />
                  <div className={styles.syncMessages}>
                    <div className={styles.syncToBuilder}>
                      Sync to Builder: 2 days ago
                    </div>
                    <div className={styles.syncEditStatus}>
                      <div className={styles.unsyncedEditsDetected}>
                        Unsynced edits detected
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.syncAction}>
                  <b className={styles.sync}>Sync</b>
                  <img
                    className={styles.antDesignsyncOutlinedIcon}
                    alt=""
                    src="/antdesignsyncoutlined.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.syncDetails1}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/group-1000001424-1.svg"
                  />
                  <div className={styles.syncToGithub1MinAgoParent}>
                    <div className={styles.syncToGithub}>
                      Sync to GitHub: 1 min ago
                    </div>
                    <div className={styles.unsyncedEditsDetectedWrapper}>
                      <div className={styles.unsyncedEditsDetected1}>
                        Unsynced edits detected
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.syncParent}>
                  <b className={styles.sync1}>Sync</b>
                  <img
                    className={styles.antDesignsyncOutlinedIcon1}
                    loading="lazy"
                    alt=""
                    src="/antdesignsyncoutlined-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orDownloadCodeContainer}>
            <span>
              <span>or</span>
            </span>
            <span className={styles.downloadCode}>
              <span>{` `}</span>
              <span>Download Code</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevModePlugin;
