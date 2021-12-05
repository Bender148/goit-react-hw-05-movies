import React from "react";
import PropTypes from "prop-types";

import styles from "./Title.module.css";

const Title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

Title.defaultProps = {
  title: "",
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
