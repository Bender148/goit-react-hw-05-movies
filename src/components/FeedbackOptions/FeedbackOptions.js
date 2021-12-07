import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div className={styles.optionsContainer}>
        <button
          className={styles.good}
          type="button"
          value="good"
          onClick={(e) => {
            onLeaveFeedback(e.target.value);
          }}
        >
          Good
        </button>
        <button
          className={styles.neutral}
          type="button"
          value="neutral"
          onClick={(e) => {
            onLeaveFeedback(e.target.value);
          }}
        >
          Neutral
        </button>
        <button
          className={styles.bad}
          type="button"
          value="bad"
          onClick={(e) => {
            onLeaveFeedback(e.target.value);
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
