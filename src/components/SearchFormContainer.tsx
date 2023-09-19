import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { AutoComplete, DatePicker, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./SearchFormContainer.module.css";

const SearchFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.hostText}>
        <b className={styles.headline}>
          <span>{`Find a `}</span>
          <span className={styles.host}>host</span>
          <span> for every journey</span>
        </b>
        <div className={styles.description}>
          Discover the best local rental properties that fits your every travel
          needs
        </div>
      </div>
      <div className={styles.searchForm}>
        <AutoComplete
          className={styles.autocompletebasic}
          placeholder="Accommodation"
          size="large"
          options={[
            { value: "Toronto" },
            { value: "San Francisco" },
            { value: "Singapore" },
          ]}
          filterOption={(inputValue: any, option: any) =>
            option.value.toUpperCase().indexOf(inputValue?.toUpperCase()) !== -1
          }
        />
        <DatePicker.RangePicker
          className={styles.autocompletebasic}
          picker="date"
          size="large"
          placeholder={["Check in", "Check in"]}
          allowClear={false}
          bordered={true}
        />
        <div className={styles.guests}>
          <Input
            className={styles.inputoneIcon}
            size="large"
            placeholder="Guest"
            bordered={true}
            type="text"
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.searchButton}>
          <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
          <div className={styles.button}>Search</div>
        </div>
      </div>
    </div>
  );
};

export default SearchFormContainer;
