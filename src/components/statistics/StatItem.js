import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styles from './StatItem.module.css';

export default function StatItem({ label, percentage }) {
  return (
    <Fragment>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </Fragment>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
