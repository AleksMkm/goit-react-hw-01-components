import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

export default function StatItem({ label, percentage }) {
  return (
    <Fragment>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </Fragment>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
